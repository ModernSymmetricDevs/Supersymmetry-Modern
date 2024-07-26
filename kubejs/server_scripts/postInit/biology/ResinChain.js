ServerEvents.recipes((event) => {
  event.remove({ type: "minecraft:smelting", input: "minecraft:slime_ball" });
  // event.remove({ type: 'gtceu:fluid_solidifier', input: 'susy:shape.mold.ball' && safeFluidOf('susy:gtfo_rubber_sap')})

  event.recipes.gtceu
    .distillery("qk3dadpheqpq5f") // remapped from original line 20
    .inputFluids(safeFluidOf("gtceu:resin", 100))
    .outputFluids(safeFluidOf("gtceu:glue", 75))
    .duration(15)
    .EUt(30);

  event.recipes.gtceu
    .fluid_solidifier("ixlbbfgye09oiq") // remapped from original line 27
    .inputFluids(safeFluidOf("gtceu:resin", 250))
    .itemOutputs(safeItemId("1x gtceu:sticky_resin"))
    .duration(20)
    .EUt(2);

  event.recipes.gtceu
    .centrifuge("jr3xnijw6t9ewl") // remapped from original line 34
    .itemInputs(safeItemId("1x gtceu:sticky_resin"))
    .outputFluids(safeFluidOf("gtceu:resin", 250))
    .duration(40)
    .EUt(7);

  event.shapeless(safeItemId('4x gtceu:sticky_resin'), [safeItemId("susy:resin_bucket"), safeItemId("gtceu:ball_casting_mold")]);
});
