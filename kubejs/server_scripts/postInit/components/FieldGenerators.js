ServerEvents.recipes(event => {
  event.remove({ type: 'gtceu:assembler', input: safeItemId('minecraft:ender_pearl') && '#forge:plates/steel' && 'susy:circuit.microprocessor' && '#forge:wires/gt_quadruple_manganese_phosphide'})
  event.remove({ type: 'gtceu:assembler', input: safeItemId('minecraft:ender_eye') && '#forge:plates/aluminium' && 'susy:circuit.processor' && '#forge:wires/gt_quadruple_magnesium_diboride'})
  event.remove({ type: 'gtceu:assembler', input: 'susy:quantumeye' && '#forge:plates/stainless_steel' && 'susy:circuit.assembly' && '#forge:wires/gt_quadruple_mercury_barium_calcium_cuprate'})
  event.remove({ type: 'gtceu:assembler', input: safeItemId('minecraft:nether_star') && '#forge:plates/double_titanium' && 'susy:circuit.nano_assembly' && '#forge:wires/gt_quadruple_uranium_triplatinum'})
  event.remove({ type: 'gtceu:assembler', input: 'susy:quantumstar' && '#forge:plates/double_tungsten_steel' && 'susy:circuit.quantum_assembly' && '#forge:wires/gt_quadruple_samarium_iron_arsenic_oxide'})
  event.remove({ type: 'gtceu:assembly_line', input: '#forge:frames/hsss' && '#forge:plates/hsss' && 'susy:quantumstar' && 'susy:emitter.luv' && 'susy:circuit.crystal_assembly' && '#forge:wires/fine_indium_tin_barium_titanium_cuprate' && '#forge:wires/fine_indium_tin_barium_titanium_cuprate' && '#forge:cables/gt_single_niobium_titanium' && safeFluidOf('gtceu:soldering_alloy')})
  event.remove({ type: 'gtceu:assembly_line', input: '#forge:frames/naquadah_alloy' && '#forge:plates/naquadah_alloy' && 'susy:quantumstar' && 'susy:emitter.zpm' && 'susy:circuit.wetware_assembly' && '#forge:wires/fine_uranium_rhodium_dinaquadide' && '#forge:wires/fine_uranium_rhodium_dinaquadide' && '#forge:cables/gt_single_vanadium_gallium' && safeFluidOf('gtceu:soldering_alloy')})
  event.remove({ type: 'gtceu:assembly_line', input: '#forge:frames/tritanium' && '#forge:plates/tritanium' && 'susy:gravistar' && 'susy:emitter.uv' && 'susy:circuit.wetware_computer' && '#forge:wires/fine_enriched_naquadah_trinium_europium_duranide' && '#forge:wires/fine_enriched_naquadah_trinium_europium_duranide' && '#forge:cables/gt_single_yttrium_barium_cuprate' && safeFluidOf('gtceu:soldering_alloy') && safeFluidOf('gtceu:naquadria')})

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (name in name_removals) {
  //     crafting.remove(name)
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import classes.*;
  // import prePostInit.Thermodynamics
  // def name_removals = [
  //         'gregtech:field_generator_lv',
  //         'gregtech:field_generator_mv',
  //         'gregtech:field_generator_hv',
  //         'gregtech:field_generator_ev',
  //         'gregtech:field_generator_iv'
  // ]
  // def cryoLiquids = [
  //         'liquid_hydrogen': 14,
  //         'liquid_oxygen': 90,
  //         'liquid_helium': 4,
  //         'liquid_neon': 27,
  //         'liquid_argon': 87,
  //         'liquid_krypton': 120,
  //         'liquid_xenon': 165,
  //         'liquid_nitrogen': 77,
  //         'liquid_refinery_gas': 80,
  //         'liquid_natural_gas': 80
  // ];
});