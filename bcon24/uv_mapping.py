import bpy
import bmesh

import numpy as np

# Get the object (replace 'YourObjectName' with your actual object name)
obj = bpy.context.object
mesh = obj.data

# Switch to edit mode if not already there
if obj.mode != 'EDIT':
    bpy.ops.object.mode_set(mode='EDIT')

# Access the BMesh API to handle mesh data
bm = bmesh.from_edit_mesh(mesh)

# Get the UV layer
uv_layer = bm.loops.layers.uv.active

# Iterate through all faces in the mesh
for face in bm.faces:
    for loop in face.loops:
        # Get the vertex corresponding to this loop
        vert = loop.vert
        
        # Get the UV data for this loop
        uv = loop[uv_layer].uv
        
        # Get the vertex position
        vert_pos = vert.co
        
        # Remap UV coordinates as a function of vertex position (example: mapping x and y directly to u and v)
        
        mag = np.sqrt(vert_pos.x**2+vert_pos.y**2+vert_pos.z**2)
        xy = np.sqrt(vert_pos.x**2+vert_pos.y**2)
        print(xy)
        print(mag)
        lat = 0
        
        lat = np.arctan2(vert_pos.z,xy)
        lon = np.arctan2(vert_pos.y,vert_pos.x)
        
        
        uv.x = lon/np.pi/2 + 0.5
        uv.y = lat/np.pi+0.5

# Update the mesh after modification
bmesh.update_edit_mesh(mesh)
