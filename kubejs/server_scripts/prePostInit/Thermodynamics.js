ServerEvents.recipes((event) => {
  event.remove({
    type: "gtceu:steam_turbine",
    input: safeFluidOf("gtceu:steam"),
  });
  event.remove({
    type: "gtceu:gas_turbine",
    input: safeFluidOf("gtceu:coal_gas"),
  });
  event.remove({
    type: "gtceu:gas_turbine",
    input: safeFluidOf("gtceu:ethylene"),
  });
  event.remove({
    type: "gtceu:gas_turbine",
    input: safeFluidOf("gtceu:natural_gas"),
  });
  event.remove({
    type: "gtceu:gas_turbine",
    input: safeFluidOf("gtceu:refinery_gas"),
  });
  event.remove({
    type: "gtceu:gas_turbine",
    input: safeFluidOf("gtceu:sulfuric_naphtha"),
  });
  event.remove({
    type: "gtceu:gas_turbine",
    input: safeFluidOf("gtceu:propene"),
  });
  event.remove({
    type: "gtceu:gas_turbine",
    input: safeFluidOf("gtceu:wood_gas"),
  });
  event.remove({
    type: "gtceu:gas_turbine",
    input: safeFluidOf("gtceu:methane"),
  });
  event.remove({
    type: "gtceu:gas_turbine",
    input: safeFluidOf("gtceu:butene"),
  });
  event.remove({
    type: "gtceu:gas_turbine",
    input: safeFluidOf("gtceu:phenol"),
  });
  event.remove({ type: "gtceu:gas_turbine", input: safeFluidOf("gtceu:lpg") });
  event.remove({
    type: "gtceu:gas_turbine",
    input: safeFluidOf("gtceu:benzene"),
  });
  event.remove({
    type: "gtceu:gas_turbine",
    input: safeFluidOf("gtceu:ethane"),
  });
  event.remove({
    type: "gtceu:gas_turbine",
    input: safeFluidOf("gtceu:sulfuric_gas"),
  });
  event.remove({
    type: "gtceu:gas_turbine",
    input: safeFluidOf("gtceu:propane"),
  });
  event.remove({
    type: "gtceu:gas_turbine",
    input: safeFluidOf("gtceu:butane"),
  });
  event.remove({
    type: "gtceu:gas_turbine",
    input: safeFluidOf("gtceu:nitrobenzene"),
  });
  event.remove({
    type: "gtceu:gas_turbine",
    input: safeFluidOf("gtceu:butadiene"),
  });
  event.remove({
    type: "gtceu:combustion_generator",
    input: safeFluidOf("gtceu:octane"),
  });
  event.remove({
    type: "gtceu:combustion_generator",
    input: safeFluidOf("gtceu:oil_light"),
  });
  event.remove({
    type: "gtceu:combustion_generator",
    input: safeFluidOf("gtceu:sulfuric_light_fuel"),
  });
  event.remove({
    type: "gtceu:combustion_generator",
    input: safeFluidOf("gtceu:ethanol"),
  });
  event.remove({
    type: "gtceu:combustion_generator",
    input: safeFluidOf("gtceu:bio_diesel"),
  });
  event.remove({
    type: "gtceu:combustion_generator",
    input: safeFluidOf("gtceu:methanol"),
  });
  event.remove({
    type: "gtceu:combustion_generator",
    input: safeFluidOf("gtceu:light_fuel"),
  });
  event.remove({
    type: "gtceu:combustion_generator",
    input: safeFluidOf("gtceu:toluene"),
  });
  event.remove({
    type: "gtceu:combustion_generator",
    input: safeFluidOf("gtceu:naphtha"),
  });
  event.remove({
    type: "gtceu:combustion_generator",
    input: safeFluidOf("gtceu:diesel"),
  });
  event.remove({
    type: "gtceu:combustion_generator",
    input: safeFluidOf("gtceu:oil_medium"),
  });
  event.remove({
    type: "gtceu:combustion_generator",
    input: safeFluidOf("gtceu:gasoline"),
  });
  event.remove({
    type: "gtceu:combustion_generator",
    input: safeFluidOf("susy:premium_gasoline"),
  });
  event.remove({
    type: "gtceu:combustion_generator",
    input: safeFluidOf("gtceu:rocket_fuel"),
  });

  event.recipes.susy
    .fluid_compressor("str2f0olhksbcl") // remapped from original line 818
    .inputFluids(safeFluidOf("gtceu:benzene", 1280))
    .outputFluids(safeFluidOf("susy:hot_hp_benzene", 1280))
    .duration(100)
    .EUt(30);

  event.recipes.susy
    .fluid_compressor("40pvmi4p8kyiqb") // remapped from original line 825
    .inputFluids(safeFluidOf("gtceu:propene", 1280))
    .outputFluids(safeFluidOf("susy:hot_hp_propene", 1280))
    .duration(100)
    .EUt(30);

  event.recipes.susy
    .fluid_compressor("cprgsgons0zmno") // remapped from original line 832
    .inputFluids(safeFluidOf("gtceu:steam", 1000))
    .outputFluids(safeFluidOf("susy:hot_hp_steam", 400))
    .duration(80)
    .EUt(120);

  event.recipes.susy
    .heat_exchanger("2eop0tk16gp0nm") // remapped from original line 839
    .inputFluids(safeFluidOf("minecraft:water", 96))
    .inputFluids(safeFluidOf("minecraft:lava", 3))
    .outputFluids(safeFluidOf("gtceu:steam", 15360))
    .outputFluids(safeFluidOf("susy:chilled_lava", 3))
    .duration(10);

  const AmmoniaRefrigerant = {
    normal_refrigerant: "ammonia",
    hot_refrigerant: "hot_compressed_ammonia",
    comp_refrigerant: "compressed_ammonia",
    cold_refrigerant: "cold_ammonia",
    EUt: 120,
    duration: 20,
    duration_radiator: 20,
    amount_to_use: 1000,
    hx_time_factor: 10,
  };

  const PropaneRefrigerant = {
    normal_refrigerant: "propane",
    hot_refrigerant: "hot_compressed_propane",
    comp_refrigerant: "compressed_propane",
    cold_refrigerant: "cold_propane",
    EUt: 60,
    duration: 30,
    duration_radiator: 10,
    amount_to_use: 2000,
    hx_time_factor: 15,
  };

  const CarbonDioxideRefrigerant = {
    normal_refrigerant: "carbon_dioxide",
    hot_refrigerant: "hot_compressed_carbon_dioxide",
    comp_refrigerant: "compressed_carbon_dioxide",
    cold_refrigerant: "cold_carbon_dioxide",
    EUt: 30,
    duration: 60,
    duration_radiator: 10,
    amount_to_use: 3000,
    hx_time_factor: 20,
  };

  const TrichlorofluoromethaneRefrigerant = {
    normal_refrigerant: "trichlorofluoromethane",
    hot_refrigerant: "hot_compressed_trichlorofluoromethane",
    comp_refrigerant: "compressed_trichlorofluoromethane",
    cold_refrigerant: "cold_trichlorofluoromethane",
    EUt: 180,
    duration: 4,
    duration_radiator: 2,
    amount_to_use: 1000,
    hx_time_factor: 2,
  };

  const DichlorodifluoromethaneRefrigerant = {
    normal_refrigerant: "dichlorodifluoromethane",
    hot_refrigerant: "hot_compressed_dichlorodifluoromethane",
    comp_refrigerant: "compressed_dichlorodifluoromethane",
    cold_refrigerant: "cold_dichlorodifluoromethane",
    EUt: 180,
    duration: 4,
    duration_radiator: 2,
    amount_to_use: 1000,
    hx_time_factor: 2,
  };

  const ChlorotrifluoromethaneRefrigerant = {
    normal_refrigerant: "chlorotrifluoromethane",
    hot_refrigerant: "hot_compressed_chlorotrifluoromethane",
    comp_refrigerant: "compressed_chlorotrifluoromethane",
    cold_refrigerant: "cold_chlorotrifluoromethane",
    EUt: 180,
    duration: 4,
    duration_radiator: 2,
    amount_to_use: 1000,
    hx_time_factor: 2,
  };

  const ChlorodifluoromethaneRefrigerant = {
    normal_refrigerant: "chlorodifluoromethane",
    hot_refrigerant: "hot_compressed_chlorodifluoromethane",
    comp_refrigerant: "compressed_chlorodifluoromethane",
    cold_refrigerant: "cold_chlorodifluoromethane",
    EUt: 180,
    duration: 4,
    duration_radiator: 2,
    amount_to_use: 1000,
    hx_time_factor: 2,
  };
  const Refrigerants = [
    AmmoniaRefrigerant,
    PropaneRefrigerant,
    CarbonDioxideRefrigerant,
    TrichlorofluoromethaneRefrigerant,
    DichlorodifluoromethaneRefrigerant,
    ChlorotrifluoromethaneRefrigerant,
    ChlorodifluoromethaneRefrigerant,
  ];

  const WaterCoolant = {
    cold_coolant: "water",
    warm_coolant: "warm_water",
    duration_radiator: 100,
    amount_to_use: 1000,
    time_factor: 10,
  };

  const SaltWaterCoolant = {
    cold_coolant: "salt_water",
    warm_coolant: "warm_salt_water",
    duration_radiator: 100,
    amount_to_use: 1000,
    time_factor: 15,
  };

  const BrineCoolant = {
    cold_coolant: "brine",
    warm_coolant: "warm_brine",
    duration_radiator: 100,
    amount_to_use: 1000,
    time_factor: 15,
  };

  const LubricantCoolant = {
    cold_coolant: "lubricant",
    warm_coolant: "warm_lubricant",
    duration_radiator: 75,
    amount_to_use: 1000,
    time_factor: 6,
  };

  const SodiumPotassiumCoolant = {
    cold_coolant: "sodium_potassium",
    warm_coolant: "warm_sodium_potassium",
    duration_radiator: 60,
    amount_to_use: 2000,
    time_factor: 5,
  };

  const EthyleneGlycolCoolant = {
    cold_coolant: "ethylene_glycol",
    warm_coolant: "warm_ethylene_glycol",
    duration_radiator: 50,
    amount_to_use: 2000,
    time_factor: 4,
  };

  const PolychlorinatedBiphenylCoolant = {
    cold_coolant: "polychlorinated_biphenyl",
    warm_coolant: "warm_polychlorinated_biphenyl",
    duration_radiator: 40,
    amount_to_use: 1000,
    time_factor: 2,
  };

  const Coolants = [
    WaterCoolant,
    SaltWaterCoolant,
    BrineCoolant,
    LubricantCoolant,
    SodiumPotassiumCoolant,
    EthyleneGlycolCoolant,
    PolychlorinatedBiphenylCoolant,
  ];

  const FluidFuels = [
    {
      liquid_fuel: "naphtha",
      byproduct: "flue_gas",
      duration: 160,
      amount_to_burn: 10,
      byproduct_amount: 1000,
      refined_fuel: false,
      gas_turbine: true,
    },
    {
      liquid_fuel: "natural_gas",
      byproduct: "flue_gas",
      duration: 100,
      amount_to_burn: 160,
      byproduct_amount: 750,
      refined_fuel: false,
      gas_turbine: true,
    },
    {
      liquid_fuel: "methane",
      byproduct: "flue_gas",
      duration: 80,
      amount_to_burn: 160,
      byproduct_amount: 500,
      refined_fuel: false,
      gas_turbine: true,
    },
    {
      liquid_fuel: "ethane",
      byproduct: "flue_gas",
      duration: 85,
      amount_to_burn: 160,
      byproduct_amount: 500,
      refined_fuel: false,
      gas_turbine: true,
    },
    {
      liquid_fuel: "butadiene",
      byproduct: "flue_gas",
      duration: 100,
      amount_to_burn: 160,
      byproduct_amount: 600,
      refined_fuel: false,
      gas_turbine: true,
    },
    {
      liquid_fuel: "propane",
      byproduct: "flue_gas",
      duration: 90,
      amount_to_burn: 160,
      byproduct_amount: 500,
      refined_fuel: false,
      gas_turbine: true,
    },
    {
      liquid_fuel: "butane",
      byproduct: "flue_gas",
      duration: 95,
      amount_to_burn: 160,
      byproduct_amount: 500,
      refined_fuel: false,
      gas_turbine: true,
    },
    {
      liquid_fuel: "toluene",
      byproduct: "flue_gas",
      duration: 160,
      amount_to_burn: 10,
      byproduct_amount: 1000,
      refined_fuel: false,
      gas_turbine: true,
    },
    {
      liquid_fuel: "wood_gas",
      byproduct: "flue_gas",
      duration: 80,
      amount_to_burn: 160,
      byproduct_amount: 750,
      refined_fuel: false,
      gas_turbine: true,
    },
    {
      liquid_fuel: "coal_gas",
      byproduct: "flue_gas",
      duration: 90,
      amount_to_burn: 160,
      byproduct_amount: 750,
      refined_fuel: false,
      gas_turbine: true,
    },
    {
      liquid_fuel: "syngas",
      byproduct: "flue_gas",
      duration: 200,
      amount_to_burn: 160,
      byproduct_amount: 1500,
      refined_fuel: false,
      gas_turbine: true,
    },
    {
      liquid_fuel: "ethylene",
      byproduct: "flue_gas",
      duration: 85,
      amount_to_burn: 160,
      byproduct_amount: 500,
      refined_fuel: false,
      gas_turbine: true,
    },
    {
      liquid_fuel: "refinery_gas",
      byproduct: "flue_gas",
      duration: 100,
      amount_to_burn: 160,
      byproduct_amount: 750,
      refined_fuel: false,
      gas_turbine: true,
    },
    {
      liquid_fuel: "ammonia",
      byproduct: "nitrogen",
      duration: 70,
      amount_to_burn: 160,
      byproduct_amount: 500,
      refined_fuel: false,
      gas_turbine: true,
    },
    {
      liquid_fuel: "propene",
      byproduct: "flue_gas",
      duration: 85,
      amount_to_burn: 160,
      byproduct_amount: 500,
      refined_fuel: false,
      gas_turbine: true,
    },
    {
      liquid_fuel: "butene",
      byproduct: "flue_gas",
      duration: 90,
      amount_to_burn: 160,
      byproduct_amount: 500,
      refined_fuel: false,
      gas_turbine: true,
    },
    {
      liquid_fuel: "phenol",
      byproduct: "flue_gas",
      duration: 120,
      amount_to_burn: 10,
      byproduct_amount: 750,
      refined_fuel: false,
      gas_turbine: true,
    },
    {
      liquid_fuel: "benzene",
      byproduct: "flue_gas",
      duration: 120,
      amount_to_burn: 10,
      byproduct_amount: 750,
      refined_fuel: false,
      gas_turbine: true,
    },
    {
      liquid_fuel: "hydrogen",
      byproduct: "steam",
      duration: 10,
      amount_to_burn: 160,
      byproduct_amount: 80,
      refined_fuel: false,
      gas_turbine: true,
    },
    {
      liquid_fuel: "methanol",
      byproduct: "flue_gas",
      duration: 40,
      amount_to_burn: 10,
      byproduct_amount: 1000,
      refined_fuel: true,
      gas_turbine: true,
    },
    {
      liquid_fuel: "ethanol",
      byproduct: "flue_gas",
      duration: 48,
      amount_to_burn: 10,
      byproduct_amount: 1200,
      refined_fuel: true,
      gas_turbine: true,
    },
    {
      liquid_fuel: "liquid_natural_gas",
      byproduct: "flue_gas",
      duration: 120,
      amount_to_burn: 10,
      byproduct_amount: 1250,
      refined_fuel: true,
      gas_turbine: true,
    },
    {
      liquid_fuel: "fuel_oil",
      byproduct: "flue_gas",
      duration: 100,
      amount_to_burn: 10,
      byproduct_amount: 2000,
      refined_fuel: true,
      gas_turbine: true,
    },
    {
      liquid_fuel: "bio_diesel",
      byproduct: "flue_gas",
      duration: 75,
      amount_to_burn: 10,
      byproduct_amount: 1500,
      refined_fuel: true,
      gas_turbine: true,
    },
    {
      liquid_fuel: "diesel",
      byproduct: "flue_gas",
      duration: 100,
      amount_to_burn: 10,
      byproduct_amount: 2000,
      refined_fuel: true,
      gas_turbine: true,
    },
    {
      liquid_fuel: "midgrade_diesel",
      byproduct: "flue_gas",
      duration: 150,
      amount_to_burn: 10,
      byproduct_amount: 3000,
      refined_fuel: true,
      gas_turbine: true,
    },
    {
      liquid_fuel: "premium_diesel",
      byproduct: "flue_gas",
      duration: 200,
      amount_to_burn: 10,
      byproduct_amount: 4000,
      refined_fuel: true,
      gas_turbine: true,
    },
    {
      liquid_fuel: "supreme_diesel",
      byproduct: "flue_gas",
      duration: 250,
      amount_to_burn: 10,
      byproduct_amount: 5000,
      refined_fuel: true,
      gas_turbine: true,
    },
    {
      liquid_fuel: "gasoline",
      byproduct: "flue_gas",
      duration: 100,
      amount_to_burn: 10,
      byproduct_amount: 2000,
      refined_fuel: true,
      gas_turbine: true,
    },
    {
      liquid_fuel: "midgrade_gasoline",
      byproduct: "flue_gas",
      duration: 150,
      amount_to_burn: 10,
      byproduct_amount: 3000,
      refined_fuel: true,
      gas_turbine: true,
    },
    {
      liquid_fuel: "premium_gasoline",
      byproduct: "flue_gas",
      duration: 200,
      amount_to_burn: 10,
      byproduct_amount: 4000,
      refined_fuel: true,
      gas_turbine: true,
    },
    {
      liquid_fuel: "supreme_gasoline",
      byproduct: "flue_gas",
      duration: 250,
      amount_to_burn: 10,
      byproduct_amount: 5000,
      refined_fuel: true,
      gas_turbine: true,
    },
    {
      liquid_fuel: "kerosene",
      byproduct: "flue_gas",
      duration: 100,
      amount_to_burn: 10,
      byproduct_amount: 1000,
      refined_fuel: true,
      gas_turbine: true,
    },
    {
      liquid_fuel: "midgrade_kerosene",
      byproduct: "flue_gas",
      duration: 150,
      amount_to_burn: 10,
      byproduct_amount: 3000,
      refined_fuel: true,
      gas_turbine: true,
    },
    {
      liquid_fuel: "premium_kerosene",
      byproduct: "flue_gas",
      duration: 200,
      amount_to_burn: 10,
      byproduct_amount: 4000,
      refined_fuel: true,
      gas_turbine: true,
    },
    {
      liquid_fuel: "supreme_kerosene",
      byproduct: "flue_gas",
      duration: 250,
      amount_to_burn: 10,
      byproduct_amount: 5000,
      refined_fuel: true,
      gas_turbine: true,
    },
  ];

  const CryoHydrogen = {
    normal_gas: "hydrogen",
    hot_high_pressure_gas: "hot_hp_hydrogen",
    high_pressure_gas: "hp_hydrogen",
    cold_high_pressure_gas: "cold_hp_hydrogen",
    liquid_gas: "liquid_hydrogen",
    amount_to_use: 10000,
    EUt: 240,
    duration: 100,
    power_heat_exchanger: 100,
    duration_heat_exchanger: 5,
    duration_radiator: 200,
    fluid_temperature: 14,
  };

  const CryoOxygen = {
    normal_gas: "oxygen",
    hot_high_pressure_gas: "hot_hp_oxygen",
    high_pressure_gas: "hp_oxygen",
    cold_high_pressure_gas: "cold_hp_oxygen",
    liquid_gas: "liquid_oxygen",
    amount_to_use: 10000,
    EUt: 30,
    duration: 100,
    power_heat_exchanger: 100,
    duration_heat_exchanger: 5,
    duration_radiator: 200,
    fluid_temperature: 90,
  };

  const CryoHelium = {
    normal_gas: "helium",
    hot_high_pressure_gas: "hot_hp_helium",
    high_pressure_gas: "hp_helium",
    cold_high_pressure_gas: "cold_hp_helium",
    liquid_gas: "liquid_helium",
    amount_to_use: 10000,
    EUt: 720,
    duration: 100,
    power_heat_exchanger: 100,
    duration_heat_exchanger: 5,
    duration_radiator: 200,
    fluid_temperature: 4,
  };

  const CryoNeon = {
    normal_gas: "neon",
    hot_high_pressure_gas: "hot_hp_neon",
    high_pressure_gas: "hp_neon",
    cold_high_pressure_gas: "cold_hp_neon",
    liquid_gas: "liquid_neon",
    amount_to_use: 10000,
    EUt: 240,
    duration: 100,
    power_heat_exchanger: 100,
    duration_heat_exchanger: 5,
    duration_radiator: 200,
    fluid_temperature: 27,
  };

  const CryoArgon = {
    normal_gas: "argon",
    hot_high_pressure_gas: "hot_hp_argon",
    high_pressure_gas: "hp_argon",
    cold_high_pressure_gas: "cold_hp_argon",
    liquid_gas: "liquid_argon",
    amount_to_use: 10000,
    EUt: 120,
    duration: 100,
    power_heat_exchanger: 100,
    duration_heat_exchanger: 5,
    duration_radiator: 200,
    fluid_temperature: 87,
  };

  const CryoKrypton = {
    normal_gas: "krypton",
    hot_high_pressure_gas: "hot_hp_krypton",
    high_pressure_gas: "hp_krypton",
    cold_high_pressure_gas: "cold_hp_krypton",
    liquid_gas: "liquid_krypton",
    amount_to_use: 10000,
    EUt: 120,
    duration: 100,
    power_heat_exchanger: 100,
    duration_heat_exchanger: 5,
    duration_radiator: 200,
    fluid_temperature: 120,
  };

  const CryoXenon = {
    normal_gas: "xenon",
    hot_high_pressure_gas: "hot_hp_xenon",
    high_pressure_gas: "hp_xenon",
    cold_high_pressure_gas: "cold_hp_xenon",
    liquid_gas: "liquid_xenon",
    amount_to_use: 10000,
    EUt: 120,
    duration: 100,
    power_heat_exchanger: 100,
    duration_heat_exchanger: 5,
    duration_radiator: 200,
    fluid_temperature: 165,
  };

  const CryoAir = {
    normal_gas: "air",
    hot_high_pressure_gas: "hot_hp_air",
    high_pressure_gas: "hp_air",
    cold_high_pressure_gas: "cold_hp_air",
    liquid_gas: "liquid_air",
    amount_to_use: 10000,
    EUt: 60,
    duration: 100,
    power_heat_exchanger: 100,
    duration_heat_exchanger: 5,
    duration_radiator: 200,
    fluid_temperature: 80,
  };

  const CryoDecarburizedAir = {
    normal_gas: "decarburized_air",
    hot_high_pressure_gas: "hot_hp_decarburized_air",
    high_pressure_gas: "hp_decarburized_air",
    cold_high_pressure_gas: "cold_hp_decarburized_air",
    liquid_gas: "liquid_decarburized_air",
    amount_to_use: 10000,
    EUt: 60,
    duration: 1,
    power_heat_exchanger: 100,
    duration_heat_exchanger: 8,
    duration_radiator: 20,
    fluid_temperature: 80,
  };

  const CryoNitrogen = {
    normal_gas: "nitrogen",
    hot_high_pressure_gas: "hot_hp_nitrogen",
    high_pressure_gas: "hp_nitrogen",
    cold_high_pressure_gas: "cold_hp_nitrogen",
    liquid_gas: "liquid_nitrogen",
    amount_to_use: 10000,
    EUt: 60,
    duration: 100,
    power_heat_exchanger: 100,
    duration_heat_exchanger: 5,
    duration_radiator: 200,
    fluid_temperature: 77,
  };

  const CryoNetherAir = {
    normal_gas: "nether_air",
    hot_high_pressure_gas: "hot_hp_nether_air",
    high_pressure_gas: "hp_nether_air",
    cold_high_pressure_gas: "cold_hp_nether_air",
    liquid_gas: "liquid_nether_air",
    amount_to_use: 10000,
    EUt: 60,
    duration: 100,
    power_heat_exchanger: 100,
    duration_heat_exchanger: 5,
    duration_radiator: 200,
    fluid_temperature: 80,
  };

  const CryoRefineryGas = {
    normal_gas: "refinery_gas",
    hot_high_pressure_gas: "hot_hp_refinery_gas",
    high_pressure_gas: "hp_refinery_gas",
    cold_high_pressure_gas: "cold_hp_refinery_gas",
    liquid_gas: "liquid_refinery_gas",
    amount_to_use: 10000,
    EUt: 60,
    duration: 100,
    power_heat_exchanger: 100,
    duration_heat_exchanger: 5,
    duration_radiator: 200,
    fluid_temperature: 80,
  };

  const CryoNaturalGas = {
    normal_gas: "natural_gas",
    hot_high_pressure_gas: "hot_hp_natural_gas",
    high_pressure_gas: "hp_natural_gas",
    cold_high_pressure_gas: "cold_hp_natural_gas",
    liquid_gas: "liquid_natural_gas",
    amount_to_use: 10000,
    EUt: 60,
    duration: 100,
    power_heat_exchanger: 100,
    duration_heat_exchanger: 5,
    duration_radiator: 200,
    fluid_temperature: 80,
  };

  const CryoMethane = {
    normal_gas: "methane",
    hot_high_pressure_gas: "hot_hp_methane",
    high_pressure_gas: "hp_methane",
    cold_high_pressure_gas: "cold_hp_methane",
    liquid_gas: "liquid_methane",
    amount_to_use: 10000,
    EUt: 60,
    duration: 100,
    power_heat_exchanger: 100,
    duration_heat_exchanger: 5,
    duration_radiator: 200,
    fluid_temperature: 80,
  };

  const CryoGases = [
    CryoHydrogen,
    CryoOxygen,
    CryoHelium,
    CryoNeon,
    CryoArgon,
    CryoKrypton,
    CryoXenon,
    CryoNitrogen,
    CryoAir,
    CryoDecarburizedAir,
    CryoNetherAir,
    CryoRefineryGas,
    CryoNaturalGas,
    CryoMethane,
  ];

  const WaterWF = {
    normal_fluid: "water",
    heated_fluid: "steam",
    leftover_fluid: "exhaust_steam",
    duration: 10,
    amount_to_use: 6,
    efficiency: 1,
    conversion_factor: 160,
  };

  const WorkingFluids = [WaterWF];

  // Heat exchanger recipes generation
  // for (cryogas in CryoGases)
  CryoGases.forEach((cryogas) => {
    Coolants.forEach((coolant) => {
      event.recipes.susy
        .heat_exchanger(
          `heat_exchanger_${cryogas.hot_high_pressure_gas}_${coolant.cold_coolant}`
        )
        .inputFluids(
          safeFluidOf(cryogas.hot_high_pressure_gas, cryogas.amount_to_use)
        )
        .inputFluids(safeFluidOf(coolant.cold_coolant, coolant.amount_to_use))
        .outputFluids(safeFluidOf(coolant.warm_coolant, coolant.amount_to_use))
        .outputFluids(
          safeFluidOf(cryogas.high_pressure_gas, cryogas.amount_to_use)
        )
        .duration(
          Math.floor(
            (cryogas.duration_heat_exchanger + coolant.hx_time_factor) / 2
          )
        );
    });

    Refrigerants.forEach((refrigerant) => {
      event.recipes.susy
        .heat_exchanger(
          `heat_exchanger_${cryogas.high_pressure_gas}_${refrigerant.cold_refrigerant}`
        )
        .inputFluids(
          safeFluidOf(cryogas.high_pressure_gas, cryogas.amount_to_use)
        )
        .inputFluids(
          safeFluidOf(refrigerant.cold_refrigerant, refrigerant.amount_to_use)
        )
        .outputFluids(
          safeFluidOf(refrigerant.normal_refrigerant, refrigerant.amount_to_use)
        )
        .outputFluids(
          safeFluidOf(cryogas.cold_high_pressure_gas, cryogas.amount_to_use)
        )
        .duration(
          Math.floor(
            (cryogas.duration_heat_exchanger + refrigerant.hx_time_factor) / 2
          )
        );
    });

    event.recipes.susy
      .fluid_compressor(`fluid_compressor_${cryogas.normal_gas}`)
      .inputFluids(safeFluidOf(cryogas.normal_gas, 1280))
      .outputFluids(safeFluidOf(cryogas.hot_high_pressure_gas, 1280))
      .duration(cryogas.duration)
      .EUt(cryogas.EUt);

    // Decompression
    event.recipes.susy
      .fluid_decompressor(
        `fluid_decompressor_${cryogas.cold_high_pressure_gas}`
      )
      .inputFluids(safeFluidOf(cryogas.cold_high_pressure_gas, 1280))
      .outputFluids(safeFluidOf(cryogas.liquid_gas, 20))
      .duration(20)
      .EUt(voltAmps[0]);

    // Reheating
    event.recipes.gtceu
      .fluid_heater(`fluid_heater_${cryogas.liquid_gas}`)
      .circuit(1)
      .inputFluids(safeFluidOf(cryogas.liquid_gas, 20))
      .outputFluids(safeFluidOf(cryogas.cold_high_pressure_gas, 1280))
      .duration(20)
      .EUt(voltAmps[0]);

    // Boiling
    event.recipes.gtceu
      .fluid_heater(`fluid_heater_boiling_${cryogas.liquid_gas}`)
      .circuit(2)
      .inputFluids(safeFluidOf(cryogas.liquid_gas, 20))
      .outputFluids(safeFluidOf(cryogas.normal_gas, 1280))
      .duration(2)
      .EUt(voltAmps[3]);

    // Radiative Cooling
    event.recipes.susy
      .radiator(`radiator_${cryogas.hot_high_pressure_gas}`)
      .inputFluids(
        safeFluidOf(cryogas.hot_high_pressure_gas, cryogas.amount_to_use / 10)
      )
      .outputFluids(
        safeFluidOf(cryogas.high_pressure_gas, cryogas.amount_to_use / 10)
      )
      .duration(Math.floor((cryogas.duration_heat_exchanger * 5) / 2));

    event.recipes.susy
      .cooling_unit(`cooling_unit_${cryogas.hot_high_pressure_gas}`)
      .inputFluids(
        safeFluidOf(cryogas.hot_high_pressure_gas, cryogas.amount_to_use)
      )
      .outputFluids(
        safeFluidOf(cryogas.high_pressure_gas, cryogas.amount_to_use)
      )
      .duration(cryogas.duration_heat_exchanger)
      .EUt(voltAmps[3]);

    /*if (!cryogas.needsAdvancedCooling) {
    event.recipes.susy
      .cooling_unit(`cooling_unit_${cryogas.high_pressure_gas}`)
      .inputFluids(safeFluidOf(cryogas.high_pressure_gas, cryogas.amount_to_use))
      .outputFluids(safeFluidOf(cryogas.cold_high_pressure_gas, cryogas.amount_to_use))
      .duration(cryogas.duration_heat_exchanger * 2)
      .EUt(voltAmps[3]);
  } else {
    CryoGases.forEach((CryoGas) => {
      event.recipes.susy
        .heat_exchanger(`heat_exchanger_${cryogas.high_pressure_gas}_${CryoGas.liquid_gas}`)
        .inputFluids(safeFluidOf(cryogas.high_pressure_gas, Math.floor(cryogas.amount_to_use / 4)))
        .inputFluids(safeFluidOf(CryoGas.liquid_gas, 100))
        .outputFluids(safeFluidOf(CryoGas.normal_gas, 6400))
        .outputFluids(safeFluidOf(cryogas.cold_high_pressure_gas, Math.floor(cryogas.amount_to_use / 4)))
        .duration(cryogas.duration_heat_exchanger * 4);
    });
  }*/
  });

  // for (FluidFuel in FluidFuels) {
  FluidFuels.forEach((FluidFuel) => {
    console.log(FluidFuel);
    if (FluidFuel.gas_turbine) {
      if (FluidFuel.refined_fuel) {
        event.recipes.gtceu
          .gas_turbine(`gas_turbine_recipe_${FluidFuel.liquid_fuel}`)
          .circuit(1)
          .inputFluids(
            safeFluidOf(FluidFuel.liquid_fuel, FluidFuel.amount_to_burn)
          )
          .inputFluids(safeFluidOf("air", 100))
          .outputFluids(
            safeFluidOf(FluidFuel.byproduct, FluidFuel.byproduct_amount)
          )
          .duration(FluidFuel.duration)
          .EUt(128);

        event.recipes.gtceu
          .gas_turbine(`gas_turbine_recipe_oxygen_${FluidFuel.liquid_fuel}`)
          .circuit(1)
          .inputFluids(
            safeFluidOf(FluidFuel.liquid_fuel, FluidFuel.amount_to_burn)
          )
          .inputFluids(safeFluidOf("oxygen", 20))
          .outputFluids(
            safeFluidOf(
              FluidFuel.byproduct,
              Math.floor(FluidFuel.byproduct_amount * 1.5)
            )
          )
          .duration(Math.floor(FluidFuel.duration * 1.5))
          .EUt(128);
      } else {
        event.recipes.gtceu
          .gas_turbine(`gas_turbine_recipe_${FluidFuel.liquid_fuel}_air`)
          .circuit(1)
          .inputFluids(
            safeFluidOf(FluidFuel.liquid_fuel, FluidFuel.amount_to_burn)
          )
          .inputFluids(safeFluidOf("air", 100))
          .outputFluids(
            safeFluidOf(FluidFuel.byproduct, FluidFuel.byproduct_amount)
          )
          .duration(FluidFuel.duration)
          .EUt(32);

        event.recipes.gtceu
          .gas_turbine(`gas_turbine_recipe_oxygen_${FluidFuel.liquid_fuel}_air`)
          .circuit(1)
          .inputFluids(
            safeFluidOf(FluidFuel.liquid_fuel, FluidFuel.amount_to_burn)
          )
          .inputFluids(safeFluidOf("oxygen", 20))
          .outputFluids(
            safeFluidOf(
              FluidFuel.byproduct,
              Math.floor(FluidFuel.byproduct_amount * 1.5)
            )
          )
          .duration(Math.floor(FluidFuel.duration * 1.5))
          .EUt(32);
      }

      lubricants.forEach((lubricant) => {
        if (FluidFuel.refined_fuel) {
          event.recipes.gtceu
            .gas_turbine(
              `gas_turbine_lubricant_${lubricant.name}_${FluidFuel.liquid_fuel}_to_${FluidFuel.byproduct}`
            )
            .inputFluids(safeFluidOf(lubricant.name, lubricant.amount_required))
            .inputFluids(
              safeFluidOf(FluidFuel.liquid_fuel, FluidFuel.amount_to_burn)
            )
            .inputFluids(safeFluidOf("oxygen", 20))
            .outputFluids(
              safeFluidOf(
                FluidFuel.byproduct,
                Math.floor(FluidFuel.byproduct_amount * 1.5)
              )
            )
            .duration(Math.floor(FluidFuel.duration * lubricant.boost * 1.5))
            .EUt(128);
        } else {
          event.recipes.gtceu
            .gas_turbine(
              `gas_turbine_lubricant_${lubricant.name}_${FluidFuel.liquid_fuel}_non_refined_to_${FluidFuel.byproduct}`
            )
            .inputFluids(safeFluidOf(lubricant.name, lubricant.amount_required))
            .inputFluids(
              safeFluidOf(FluidFuel.liquid_fuel, FluidFuel.amount_to_burn)
            )
            .inputFluids(safeFluidOf("oxygen", 20))
            .outputFluids(
              safeFluidOf(
                FluidFuel.byproduct,
                Math.floor(FluidFuel.byproduct_amount * 1.5)
              )
            )
            .duration(Math.floor(FluidFuel.duration * lubricant.boost * 1.5))
            .EUt(32);
        }
      });
    }

    // Combustion generator recipe
    event.recipes.gtceu
      .combustion_generator(`combustion_generator_${FluidFuel.liquid_fuel}`)
      .inputFluids(safeFluidOf(FluidFuel.liquid_fuel, 25))
      .duration(100)
      .EUt(1);

    // Canner recipe
    // event.recipes.susy
    //   .canner(`canner_${FluidFuel.liquid_fuel}`)
    //   .inputFluids(safeFluidOf(FluidFuel.liquid_fuel, 500))
    //   .inputs(itemOf("techguns:itemshared", 28))
    //   .outputs(itemOf("techguns:itemshared", 27))
    //   .duration(80)
    //   .EUt(7)
    //
  });

  // for (WorkingFluid in WorkingFluids)
  WorkingFluids.forEach((WorkingFluid) => {
    event.recipes.susy
      .heat_exchanger(
        `heat_exchanger_${WorkingFluid.normal_fluid}_desulfurized`
      )
      .inputFluids(
        safeFluidOf(WorkingFluid.normal_fluid, WorkingFluid.amount_to_use)
      )
      .inputFluids(safeFluidOf("desulfurized_flue_gas", 500))
      .outputFluids(
        safeFluidOf(
          WorkingFluid.heated_fluid,
          WorkingFluid.amount_to_use * WorkingFluid.conversion_factor
        )
      )
      .outputFluids(safeFluidOf("chilled_flue_gas", 500))
      .duration(Math.floor(WorkingFluid.duration * 0.75));

    event.recipes.susy
      .heat_exchanger(`heat_exchanger_${WorkingFluid.normal_fluid}_flue_gas`)
      .inputFluids(
        safeFluidOf(WorkingFluid.normal_fluid, WorkingFluid.amount_to_use)
      )
      .inputFluids(safeFluidOf("flue_gas", 500))
      .outputFluids(
        safeFluidOf(
          WorkingFluid.heated_fluid,
          WorkingFluid.amount_to_use * WorkingFluid.conversion_factor
        )
      )
      .outputFluids(safeFluidOf("chilled_flue_gas", 500))
      .duration(WorkingFluid.duration);

    event.recipes.gtceu
      .steam_turbine(`steam_turbine_${WorkingFluid.heated_fluid}`)
      .inputFluids(
        safeFluidOf(
          WorkingFluid.heated_fluid,
          WorkingFluid.amount_to_use * WorkingFluid.conversion_factor
        )
      )
      .outputFluids(
        safeFluidOf(
          WorkingFluid.leftover_fluid,
          WorkingFluid.amount_to_use * WorkingFluid.conversion_factor
        )
      )
      .duration(WorkingFluid.duration * WorkingFluid.efficiency)
      .EUt(32);

    event.recipes.susy
      .large_steam_turbine(`large_steam_turbine_${WorkingFluid.heated_fluid}`)
      .circuit(1)
      .inputFluids(
        safeFluidOf(
          WorkingFluid.heated_fluid,
          WorkingFluid.amount_to_use * WorkingFluid.conversion_factor
        )
      )
      .outputFluids(
        safeFluidOf(
          WorkingFluid.leftover_fluid,
          WorkingFluid.amount_to_use * WorkingFluid.conversion_factor
        )
      )
      .duration(WorkingFluid.duration * WorkingFluid.efficiency)
      .EUt(32);

    lubricants.forEach((lubricant) => {
      event.recipes.susy
        .large_steam_turbine(
          `large_steam_turbine_${lubricant.name}_${WorkingFluid.heated_fluid}_lubricant`
        )
        .inputFluids(safeFluidOf(lubricant.name, lubricant.amount_required))
        .inputFluids(
          safeFluidOf(
            WorkingFluid.heated_fluid,
            WorkingFluid.amount_to_use * WorkingFluid.conversion_factor
          )
        )
        .outputFluids(
          safeFluidOf(
            WorkingFluid.leftover_fluid,
            WorkingFluid.amount_to_use * WorkingFluid.conversion_factor
          )
        )
        .duration(
          Math.floor(
            WorkingFluid.duration * WorkingFluid.efficiency * lubricant.boost
          )
        )
        .EUt(32);
    });

    event.recipes.susy
      .cooling_tower(`cooling_tower_${WorkingFluid.leftover_fluid}`)
      .inputFluids(
        safeFluidOf(
          WorkingFluid.leftover_fluid,
          WorkingFluid.amount_to_use * WorkingFluid.conversion_factor * 64
        )
      )
      .inputFluids(safeFluidOf("water", 1000))
      .outputFluids(
        safeFluidOf(WorkingFluid.normal_fluid, WorkingFluid.amount_to_use * 64)
      )
      .outputFluids(safeFluidOf("water", 750))
      .duration(WorkingFluid.duration)
      .EUt(8);

    event.recipes.susy
      .radiator(`radiator_${WorkingFluid.leftover_fluid}`)
      .inputFluids(
        safeFluidOf(
          WorkingFluid.leftover_fluid,
          WorkingFluid.amount_to_use * WorkingFluid.conversion_factor * 2
        )
      )
      .outputFluids(
        safeFluidOf(WorkingFluid.normal_fluid, WorkingFluid.amount_to_use * 2)
      )
      .duration(WorkingFluid.duration)
      .EUt(8);
  });

  // for (refrigerant in Refrigerants)
  Refrigerants.forEach((refrigerant) => {
    // Compression
    event.recipes.susy
      .fluid_compressor(`compress_${refrigerant.normal_refrigerant}`)
      .inputFluids(
        safeFluidOf(
          `gtceu:${refrigerant.normal_refrigerant}`,
          refrigerant.amount_to_use
        )
      )
      .outputFluids(
        safeFluidOf(
          `susy:${refrigerant.hot_refrigerant}`,
          refrigerant.amount_to_use
        )
      )
      .duration(refrigerant.duration)
      .EUt(refrigerant.EUt);

    // Decompression
    event.recipes.susy
      .fluid_decompressor(`decompress_${refrigerant.comp_refrigerant}`)
      .inputFluids(
        safeFluidOf(
          `susy:${refrigerant.comp_refrigerant}`,
          refrigerant.amount_to_use
        )
      )
      .outputFluids(
        safeFluidOf(
          `susy:${refrigerant.cold_refrigerant}`,
          refrigerant.amount_to_use
        )
      )
      .duration(refrigerant.duration)
      .EUt(voltAmps[0]);

    // Radiative Cooling
    event.recipes.susy
      .radiator(`radiator_${refrigerant.hot_refrigerant}`)
      .inputFluids(
        safeFluidOf(
          `susy:${refrigerant.hot_refrigerant}`,
          refrigerant.amount_to_use / 10
        )
      )
      .outputFluids(
        safeFluidOf(
          `susy:${refrigerant.comp_refrigerant}`,
          refrigerant.amount_to_use / 10
        )
      )
      .duration(refrigerant.duration_radiator);

    // Cooling Unit: Hot to Compressed
    event.recipes.susy
      .cooling_unit(`cooling_hot_to_comp_${refrigerant.hot_refrigerant}`)
      .inputFluids(
        safeFluidOf(
          `susy:${refrigerant.hot_refrigerant}`,
          refrigerant.amount_to_use
        )
      )
      .outputFluids(
        safeFluidOf(
          `susy:${refrigerant.comp_refrigerant}`,
          refrigerant.amount_to_use
        )
      )
      .duration(Math.floor(refrigerant.duration_radiator / 2))
      .EUt(voltAmps[3]);

    // Cooling Unit: Compressed to Cold
    event.recipes.susy
      .cooling_unit(`cooling_comp_to_cold_${refrigerant.comp_refrigerant}`)
      .inputFluids(
        safeFluidOf(
          `susy:${refrigerant.comp_refrigerant}`,
          refrigerant.amount_to_use
        )
      )
      .outputFluids(
        safeFluidOf(
          `susy:${refrigerant.cold_refrigerant}`,
          refrigerant.amount_to_use
        )
      )
      .duration(Math.floor(refrigerant.duration_radiator / 2))
      .EUt(voltAmps[3]);
  });

  // for (coolant in Coolants)
  Coolants.forEach((coolant) => {
    // Radiative Cooling
    event.recipes.susy
      .radiator(`radiator_${coolant.cold_coolant}`)
      .inputFluids(
        safeFluidOf(`${coolant.warm_coolant}`, coolant.amount_to_use / 10)
      )
      .outputFluids(
        safeFluidOf(`${coolant.cold_coolant}`, coolant.amount_to_use / 10)
      )
      .duration(coolant.duration_radiator);

    // Cooling Unit: Warm to Cold
    event.recipes.susy
      .cooling_unit(`cooling_unit_${coolant.cold_coolant}`)
      .inputFluids(
        safeFluidOf(`${coolant.warm_coolant}`, coolant.amount_to_use)
      )
      .outputFluids(
        safeFluidOf(`${coolant.cold_coolant}`, coolant.amount_to_use)
      )
      .duration(Math.floor(coolant.duration_radiator / 2))
      .EUt(voltAmps[3]);
  });

  // Water cooling with Refrigerants
  Refrigerants.forEach((refrigerant) => {
    event.recipes.susy
      .heat_exchanger(`water_cooling_${refrigerant.cold_refrigerant}`)
      .inputFluids(
        safeFluidOf("minecraft:water", 1000),
        safeFluidOf(refrigerant.cold_refrigerant, refrigerant.amount_to_use)
      )
      .outputFluids(
        safeFluidOf("minecraft:ice", 1000),
        safeFluidOf(refrigerant.normal_refrigerant, refrigerant.amount_to_use)
      )
      .duration(60);
  });
});
