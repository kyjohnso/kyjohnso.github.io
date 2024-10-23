import bpy

for i in range(1,13):
    obj = bpy.data.objects.get("icomoon.{:03d}".format(i))

    # Check if the object exists
    if obj is not None:
        # Set the object as the active object
        bpy.context.view_layer.objects.active = obj
        
        # Optionally, select the object as well
        obj.select_set(True)

        bpy.ops.object.mode_set(mode='OBJECT')

    # Apply all modifiers
    for modifier in obj.modifiers:
        bpy.ops.object.modifier_apply(modifier=modifier.name)