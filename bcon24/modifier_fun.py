import bpy

for i in range(1,13):
    obj = bpy.data.objects["icomoon.{:03d}".format(i)]
    obj.modifiers.new(name="Boolean",type="BOOLEAN")
    obj.modifiers["Boolean"].operation = 'INTERSECT'
    obj.modifiers["Boolean"].object = bpy.data.objects["Icosphere.{:03d}".format(i)]
    
#    obj = bpy.data.objects["icomoon.{:03d}".format(i)]
    
#    obj.modifiers.new(name="Boolean",type="BOOLEAN")
#    obj.modifiers["Boolean"].operation = 'DIFFERENCE'
#    obj.modifiers["Boolean"].object = bpy.data.objects["magnet_blanks"]
#    
#    obj.modifiers.new(name="Boolean.001",type="BOOLEAN")
#    obj.modifiers["Boolean.001"].operation = 'DIFFERENCE'
#    obj.modifiers["Boolean.001"].object = bpy.data.objects["magnet_blanks_inner"]
    
#    obj.modifiers.new(name="Boolean.002",type="BOOLEAN")
#    obj.modifiers["Boolean.002"].operation = 'DIFFERENCE'
#    obj.modifiers["Boolean.002"].object = bpy.data.objects["Icosphere"]
    