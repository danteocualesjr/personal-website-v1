import math
import pygame

# Initialize Pygame

pygame.init()

# Screen dimensions

WIDTH, HEIGHT = 800, 600

screen = pygame.display.set_mode((WIDTH, HEIGHT))

pygame.display.set_caption("Bouncing Ball in a Spinning Hexagon")

clock = pygame.time.Clock()

# Colors

WHITE = (255, 255, 255)
BLUE = (50, 50, 255)
RED = (255, 50, 50)
BLACK = (0, 0, 0)

# Hexagon (spinning container) properties
hex_center = (WIDTH // 2, HEIGHT // 2)
hex_radius = 250
hex_rotation = 0.0  # current rotation angle in radians
hex_angular_velocity = math.radians(30)  # 30 degrees per second

# Ball properties
ball_radius = 10
ball_pos = [hex_center[0], hex_center[1] - 100]
ball_vel = [150.0, 0.0]  # initial velocity

# Physics parameters
gravity = 300.0           # pixels per second^2
restitution = 0.9         # bounciness factor
collision_friction = 0.98 # friction factor for tangential velocity

def rotate_point(point, angle, origin):
    """Rotate a point around a given origin by angle (radians)."""
    ox, oy = origin
    px, py = point
    cos_a = math.cos(angle)
    sin_a = math.sin(angle)
    qx = ox + cos_a * (px - ox) - sin_a * (py - oy)
    qy = oy + sin_a * (px - ox) + cos_a * (py - oy)
    return (qx, qy)

def compute_hexagon_vertices(center, radius, rotation):
    """Return a list of 6 vertices (tuples) of a regular hexagon rotated by 'rotation'."""
    vertices = []
    for i in range(6):
        angle = rotation + 2 * math.pi * i / 6
        x = center[0] + radius * math.cos(angle)
        y = center[1] + radius * math.sin(angle)
        vertices.append((x, y))
    return vertices

def normalize(vec):
    x, y = vec
    mag = math.hypot(x, y)
    if mag == 0:
        return (0.0, 0.0)
    return (x / mag, y / mag)

def dot(v1, v2):
    return v1[0]*v2[0] + v1[1]*v2[1]

def subtract(v1, v2):
    return (v1[0]-v2[0], v1[1]-v2[1])

def add(v1, v2):
    return (v1[0]+v2[0], v1[1]+v2[1])

def scale(vec, scalar):
    return (vec[0]*scalar, vec[1]*scalar)

def line_collision(ball_center, ball_radius, p1, p2):
    """
    Check if a circle (ball) collides with the line segment from p1 to p2.
    Returns a tuple (collided, distance, closest_point, t) where:
      - collided is True if collision is detected,
      - distance is the distance from ball_center to the line,
      - closest_point is the projection of ball_center onto the line,
      - t is the projection factor along p1->p2.
    """
    line_vec = (p2[0]-p1[0], p2[1]-p1[1])
    line_len_sq = line_vec[0]**2 + line_vec[1]**2
    if line_len_sq == 0:
        return (False, None, None, None)
    
    t = dot(subtract(ball_center, p1), line_vec) / line_len_sq
    if t < 0 or t > 1:
        return (False, None, None, t)
    
    closest = (p1[0] + t * line_vec[0], p1[1] + t * line_vec[1])
    dist = math.hypot(ball_center[0]-closest[0], ball_center[1]-closest[1])
    if dist < ball_radius:
        return (True, dist, closest, t)
    else:
        return (False, dist, closest, t)

def get_inward_normal(p1, p2, container_center):
    """
    For the edge from p1 to p2, compute the inward-facing normal.
    """
    edge = (p2[0]-p1[0], p2[1]-p1[1])
    candidate1 = (edge[1], -edge[0])
    candidate2 = (-edge[1], edge[0])
    
    mid = ((p1[0]+p2[0])/2, (p1[1]+p2[1])/2)
    to_center = subtract(container_center, mid)
    
    if dot(candidate1, to_center) > dot(candidate2, to_center):
        normal = candidate1
    else:
        normal = candidate2
    return normalize(normal)

# Main loop: runs indefinitely until the window is closed
while True:
    dt = clock.tick(60) / 1000.0  # Time in seconds since last frame
    
    # Process events
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            # Exit the loop (and program) only when the window is closed
            exit()
    
    # Update hexagon rotation
    hex_rotation += hex_angular_velocity * dt
    vertices = compute_hexagon_vertices(hex_center, hex_radius, hex_rotation)
    
    # Update ball physics
    ball_vel[1] += gravity * dt  # Apply gravity
    ball_pos[0] += ball_vel[0] * dt
    ball_pos[1] += ball_vel[1] * dt
    
    # Check collision with each edge of the hexagon
    for i in range(len(vertices)):
        p1 = vertices[i]
        p2 = vertices[(i+1) % len(vertices)]
        
        collided, dist, closest_point, t = line_collision(ball_pos, ball_radius, p1, p2)
        if not collided:
            continue
        
        normal = get_inward_normal(p1, p2, hex_center)
        penetration = ball_radius - dist
        ball_pos[0] += normal[0] * penetration
        ball_pos[1] += normal[1] * penetration

        # Determine wall velocity due to rotation at collision point
        rel_collision = (closest_point[0] - hex_center[0], closest_point[1] - hex_center[1])
        wall_vel = (-hex_angular_velocity * rel_collision[1],
                    hex_angular_velocity * rel_collision[0])
        
        # Compute relative velocity
        rel_vel = (ball_vel[0] - wall_vel[0], ball_vel[1] - wall_vel[1])
        
        # Only adjust if moving toward the wall
        if dot(rel_vel, normal) < 0:
            vn = dot(rel_vel, normal)
            v_normal = scale(normal, vn)
            v_tangent = (rel_vel[0] - v_normal[0], rel_vel[1] - v_normal[1])
            
            # Reflect the normal component and apply restitution
            v_normal_reflected = scale(normal, -vn * restitution)
            # Apply friction to the tangential component
            v_tangent = (v_tangent[0] * collision_friction, v_tangent[1] * collision_friction)
            
            new_rel_vel = (v_normal_reflected[0] + v_tangent[0],
                           v_normal_reflected[1] + v_tangent[1])
            
            # Convert back to world coordinates
            ball_vel[0] = new_rel_vel[0] + wall_vel[0]
            ball_vel[1] = new_rel_vel[1] + wall_vel[1]
    
    # Drawing section
    screen.fill(BLACK)
    pygame.draw.polygon(screen, BLUE, vertices, 3)
    pygame.draw.circle(screen, RED, (int(ball_pos[0]), int(ball_pos[1])), ball_radius)
    pygame.display.flip()
