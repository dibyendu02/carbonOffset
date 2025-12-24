// Carbon Emission Factors and Calculations
// Based on EPA and international carbon offset standards

// ============================================
// EMISSION FACTORS (kg CO2 per unit)
// ============================================

export const EMISSION_FACTORS = {
  // Electric: kg CO2 per kWh (varies by grid mix, using US average)
  ELECTRICITY: 0.5,

  // Animals: kg CO2 per animal per year
  ANIMALS: {
    COW: 2300, // Cattle (beef)
    PIG: 1130, // Pigs
    CHICKEN: 6.9, // Poultry
    SHEEP: 1150, // Sheep/Goats
  },

  // Heat: kg CO2 per kWh
  HEAT: {
    NATURAL_GAS: 0.185, // Natural gas heating
    OIL: 0.246, // Heating oil
    PROPANE: 0.214, // Propane
    WOOD: 0.039, // Wood (renewable, lower emissions)
  },

  // Vehicle: kg CO2 per mile
  VEHICLE: {
    GASOLINE: 0.404, // Average gasoline car
    DIESEL: 0.411, // Diesel car
    HYBRID: 0.2, // Hybrid vehicle
    EV: 0.089, // Electric vehicle (based on grid mix)
  },

  // Air Travel: kg CO2 per passenger mile
  AIR: {
    SHORT_HAUL: 0.255, // < 500 miles
    MEDIUM_HAUL: 0.195, // 500-1500 miles
    LONG_HAUL: 0.15, // > 1500 miles
  },

  // Rail: kg CO2 per passenger mile
  RAIL: {
    COMMUTER: 0.089, // Light rail/metro
    REGIONAL: 0.055, // Regional trains
    HIGH_SPEED: 0.041, // High-speed rail
  },

  // Shipping: kg CO2 per ton-mile
  SHIPPING: {
    CONTAINER: 0.021, // Container ship
    BULK: 0.015, // Bulk carrier
    TANKER: 0.01, // Oil tanker
  },
};

// ============================================
// PRICING CONSTANTS
// ============================================

export const PRICING = {
  TOKEN_COST: 1.2, // $1.20 per token
  KG_PER_TOKEN: 1000, // 1 token = 1 ton = 1000 kg CO2
};

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface ElectricInput {
  annualKwh: number;
}

export interface AnimalInput {
  cows: number;
  pigs: number;
  chickens: number;
  sheep: number;
}

export interface HeatInput {
  naturalGasKwh: number;
  oilKwh: number;
  propaneKwh: number;
  woodKwh: number;
}

export interface VehicleInput {
  gasolineMiles: number;
  dieselMiles: number;
  hybridMiles: number;
  evMiles: number;
}

export interface AirInput {
  shortHaulMiles: number;
  mediumHaulMiles: number;
  longHaulMiles: number;
}

export interface RailInput {
  commuterMiles: number;
  regionalMiles: number;
  highSpeedMiles: number;
}

export interface ShippingInput {
  containerTonMiles: number;
  bulkTonMiles: number;
  tankerTonMiles: number;
}

export interface CalculationResult {
  totalKgCO2: number;
  totalTonsCO2: number;
  totalTokens: number;
  totalCost: number;
}

export interface CategoryBreakdown {
  electric: number;
  animals: number;
  heat: number;
  vehicle: number;
  air: number;
  rail: number;
  shipping: number;
}

// ============================================
// CALCULATION FUNCTIONS
// ============================================

/**
 * Calculate CO2 emissions from electricity consumption
 * @param input Annual kWh consumption
 * @returns kg CO2
 */
export const calculateElectric = (input: ElectricInput): number => {
  return input.annualKwh * EMISSION_FACTORS.ELECTRICITY;
};

/**
 * Calculate CO2 emissions from livestock
 * @param input Number of animals by type
 * @returns kg CO2
 */
export const calculateAnimals = (input: AnimalInput): number => {
  return (
    input.cows * EMISSION_FACTORS.ANIMALS.COW +
    input.pigs * EMISSION_FACTORS.ANIMALS.PIG +
    input.chickens * EMISSION_FACTORS.ANIMALS.CHICKEN +
    input.sheep * EMISSION_FACTORS.ANIMALS.SHEEP
  );
};

/**
 * Calculate CO2 emissions from home heating
 * @param input kWh by fuel type
 * @returns kg CO2
 */
export const calculateHeat = (input: HeatInput): number => {
  return (
    input.naturalGasKwh * EMISSION_FACTORS.HEAT.NATURAL_GAS +
    input.oilKwh * EMISSION_FACTORS.HEAT.OIL +
    input.propaneKwh * EMISSION_FACTORS.HEAT.PROPANE +
    input.woodKwh * EMISSION_FACTORS.HEAT.WOOD
  );
};

/**
 * Calculate CO2 emissions from vehicle transportation
 * @param input Annual miles by vehicle type
 * @returns kg CO2
 */
export const calculateVehicle = (input: VehicleInput): number => {
  return (
    input.gasolineMiles * EMISSION_FACTORS.VEHICLE.GASOLINE +
    input.dieselMiles * EMISSION_FACTORS.VEHICLE.DIESEL +
    input.hybridMiles * EMISSION_FACTORS.VEHICLE.HYBRID +
    input.evMiles * EMISSION_FACTORS.VEHICLE.EV
  );
};

/**
 * Calculate CO2 emissions from air travel
 * @param input Miles by flight distance category
 * @returns kg CO2
 */
export const calculateAir = (input: AirInput): number => {
  return (
    input.shortHaulMiles * EMISSION_FACTORS.AIR.SHORT_HAUL +
    input.mediumHaulMiles * EMISSION_FACTORS.AIR.MEDIUM_HAUL +
    input.longHaulMiles * EMISSION_FACTORS.AIR.LONG_HAUL
  );
};

/**
 * Calculate CO2 emissions from rail travel
 * @param input Miles by train type
 * @returns kg CO2
 */
export const calculateRail = (input: RailInput): number => {
  return (
    input.commuterMiles * EMISSION_FACTORS.RAIL.COMMUTER +
    input.regionalMiles * EMISSION_FACTORS.RAIL.REGIONAL +
    input.highSpeedMiles * EMISSION_FACTORS.RAIL.HIGH_SPEED
  );
};

/**
 * Calculate CO2 emissions from freight shipping
 * @param input Ton-miles by ship type
 * @returns kg CO2
 */
export const calculateShipping = (input: ShippingInput): number => {
  return (
    input.containerTonMiles * EMISSION_FACTORS.SHIPPING.CONTAINER +
    input.bulkTonMiles * EMISSION_FACTORS.SHIPPING.BULK +
    input.tankerTonMiles * EMISSION_FACTORS.SHIPPING.TANKER
  );
};

// ============================================
// CONVERSION FUNCTIONS
// ============================================

/**
 * Convert kg CO2 to tokens and calculate cost
 * @param kgCO2 Total kg CO2 emissions
 * @returns Calculation result with tokens and cost
 */
export const convertToTokensAndCost = (kgCO2: number): CalculationResult => {
  const totalTonsCO2 = kgCO2 / PRICING.KG_PER_TOKEN;
  const totalTokens = Math.ceil(totalTonsCO2); // Round up to nearest token
  const totalCost = totalTokens * PRICING.TOKEN_COST;

  return {
    totalKgCO2: kgCO2,
    totalTonsCO2,
    totalTokens,
    totalCost,
  };
};

/**
 * Helper function to parse string inputs to numbers
 * @param value String value from form input
 * @returns Parsed number or 0 if invalid
 */
export const parseInput = (value: string): number => {
  const parsed = parseFloat(value);
  return isNaN(parsed) || parsed < 0 ? 0 : parsed;
};

/**
 * Calculate total emissions from all categories
 * @param breakdown Category emissions in kg CO2
 * @returns Total calculation result
 */
export const calculateTotal = (breakdown: CategoryBreakdown): CalculationResult => {
  const totalKgCO2 =
    breakdown.electric +
    breakdown.animals +
    breakdown.heat +
    breakdown.vehicle +
    breakdown.air +
    breakdown.rail +
    breakdown.shipping;

  return convertToTokensAndCost(totalKgCO2);
};
