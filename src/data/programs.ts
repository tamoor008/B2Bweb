export interface ProgramData {
  id: string;
  title: string;
  category: "Gym" | "Home" | "Bodyweight" | "Outdoors";
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  duration: string;
  frequency: string;
  rating: number;
  reviewsCount: number;
  equipment: string;
  description: string;
  isRecommended?: boolean;
  weeks: {
    weekNumber: number;
    weekTitle: string;
    description: string;
    daysCount: number;
  }[];
}

export const PROGRAMS: ProgramData[] = [
  {
    id: "foundation-strength-101",
    title: "Basics 101: Strength Foundations",
    category: "Gym",
    level: "Beginner",
    duration: "4 Weeks",
    frequency: "3x/week",
    rating: 4.9,
    reviewsCount: 420,
    equipment: "Barbell, Dumbbells",
    description:
      "Master fundamental movement patterns—squat, hinge, push, pull, and carry—with progressive overload designed for new lifters.",
    isRecommended: true,
    weeks: [
      { weekNumber: 1, weekTitle: "Movement Pattern Baseline", description: "Form mechanics & RPE calibration", daysCount: 3 },
      { weekNumber: 2, weekTitle: "Linear Overload Progression", description: "Adding +5lbs to compound lifts", daysCount: 3 },
      { weekNumber: 3, weekTitle: "Volume Accumulation", description: "Increasing set density & work capacity", daysCount: 3 },
      { weekNumber: 4, weekTitle: "Baseline Testing & Deload", description: "Evaluate strength PRs & recovery", daysCount: 3 },
    ],
  },
  {
    id: "hypertrophy-blueprint",
    title: "Hypertrophy & Muscle Blueprint",
    category: "Gym",
    level: "Intermediate",
    duration: "8 Weeks",
    frequency: "4x/week",
    rating: 4.95,
    reviewsCount: 850,
    equipment: "Full Gym Setup",
    description:
      "Targeted hypertrophy volume protocols to build lean muscular symmetry while preserving joint health and recovery capacity.",
    isRecommended: true,
    weeks: [
      { weekNumber: 1, weekTitle: "Upper / Lower Split Intro", description: "Establishing baseline working weights", daysCount: 4 },
      { weekNumber: 2, weekTitle: "Mechanical Tension Focus", description: "Tempo control & eccentric loading", daysCount: 4 },
      { weekNumber: 3, weekTitle: "Metabolic Stress & Pump", description: "Drop sets & mechanical supersets", daysCount: 4 },
      { weekNumber: 4, weekTitle: "Mid-Cycle Overreach", description: "Peak training volume week", daysCount: 4 },
      { weekNumber: 5, weekTitle: "Active Recovery & Resensitization", description: "Light deload to prime muscle growth", daysCount: 4 },
      { weekNumber: 6, weekTitle: "Intense Load Progression", description: "Heavy compound focus", daysCount: 4 },
      { weekNumber: 7, weekTitle: "Failure & RPE 9.5", description: "Maximum muscular stimulation", daysCount: 4 },
      { weekNumber: 8, weekTitle: "Growth Peak & Assessment", description: "Final progress photo & PR log", daysCount: 4 },
    ],
  },
  {
    id: "bodyweight-core-mastery",
    title: "Bodyweight & Core Mastery",
    category: "Bodyweight",
    level: "All Levels",
    duration: "6 Weeks",
    frequency: "3x/week",
    rating: 4.88,
    reviewsCount: 310,
    equipment: "Pull-up Bar, Gymnastic Rings",
    description:
      "Master high-tension calisthenics skills, gymnastics ring stability, and bulletproof core endurance anywhere without a heavy gym.",
    isRecommended: false,
    weeks: [
      { weekNumber: 1, weekTitle: "Tension & Hollow Hold Basics", description: "Core bracing & ring support", daysCount: 3 },
      { weekNumber: 2, weekTitle: "Pulling & Dipping Power", description: "Chest-to-bar pullups & dip progressions", daysCount: 3 },
      { weekNumber: 3, weekTitle: "Unilateral Leg Balance", description: "Pistol squat & archer pushup drills", daysCount: 3 },
      { weekNumber: 4, weekTitle: "Leverage Progression", description: "Tuck front lever & handstand hold prep", daysCount: 3 },
      { weekNumber: 5, weekTitle: "Density Circuits", description: "Time-under-tension endurance", daysCount: 3 },
      { weekNumber: 6, weekTitle: "Calisthenics Skill Challenge", description: "Max effort reps & hold times", daysCount: 3 },
    ],
  },
  {
    id: "explosive-athletic-performance",
    title: "Explosive Athletic Performance",
    category: "Outdoors",
    level: "Advanced",
    duration: "6 Weeks",
    frequency: "4x/week",
    rating: 4.92,
    reviewsCount: 540,
    equipment: "Plyo Boxes, Med Balls, Turf",
    description:
      "Increase sprint acceleration, vertical jump height, and lateral agility using science-based rate of force development (RFD) methods.",
    isRecommended: true,
    weeks: [
      { weekNumber: 1, weekTitle: "Rate of Force Intro", description: "Jump landing mechanics & elastic recoil", daysCount: 4 },
      { weekNumber: 2, weekTitle: "Sprint Acceleration & COD", description: "Change of direction & 10m acceleration", daysCount: 4 },
      { weekNumber: 3, weekTitle: "Contrast Training Peak", description: "Heavy squats paired with depth jumps", daysCount: 4 },
      { weekNumber: 4, weekTitle: "Rotational Power", description: "Medicine ball throws & lateral bounds", daysCount: 4 },
      { weekNumber: 5, weekTitle: "Max Velocity Sprints", description: "Top speed mechanics & flying 20s", daysCount: 4 },
      { weekNumber: 6, weekTitle: "Athletic Combine Test", description: "Vertical jump, broad jump & 40-yd dash", daysCount: 4 },
    ],
  },
  {
    id: "bulletproof-joints-mobility",
    title: "Bulletproof Joints & Mobility",
    category: "Home",
    level: "All Levels",
    duration: "4 Weeks",
    frequency: "5x/week",
    rating: 4.97,
    reviewsCount: 680,
    equipment: "Resistance Bands, Foam Roller",
    description:
      "Eliminate shoulder, hip, and lower back tightness while restoring active range of motion under load.",
    isRecommended: false,
    weeks: [
      { weekNumber: 1, weekTitle: "Ankle & Hip Decompression", description: "Restoring deep squat depth", daysCount: 5 },
      { weekNumber: 2, weekTitle: "Thoracic & Shoulder Health", description: "Overhead mobility & rotator cuff activation", daysCount: 5 },
      { weekNumber: 3, weekTitle: "Active Loaded Stretching", description: "Jefferson curls & Cossack squat holds", daysCount: 5 },
      { weekNumber: 4, weekTitle: "Full-Body Maintenance", description: "Daily 15-minute movement routine", daysCount: 5 },
    ],
  },
  {
    id: "metabolic-engine-conditioning",
    title: "Metabolic Conditioning & Engine",
    category: "Home",
    level: "Intermediate",
    duration: "5 Weeks",
    frequency: "4x/week",
    rating: 4.89,
    reviewsCount: 390,
    equipment: "Kettlebells, Jump Rope",
    description:
      "High-density aerobic capacity workouts structured to maximize calorie burn and metabolic work capacity.",
    isRecommended: false,
    weeks: [
      { weekNumber: 1, weekTitle: "Zone 2 & Interval Foundation", description: "Base building & heart rate recovery", daysCount: 4 },
      { weekNumber: 2, weekTitle: "Kettlebell Complex Swings", description: "Snatch, clean, and press EMOMs", daysCount: 4 },
      { weekNumber: 3, weekTitle: "High-Threshold Tabata", description: "Sprint intervals & burpee conditioning", daysCount: 4 },
      { weekNumber: 4, weekTitle: "Aerobic Power Overreach", description: "Longer work intervals with short rest", daysCount: 4 },
      { weekNumber: 5, weekTitle: "Engine Test Benchmark", description: "15-Minute max rounds protocol", daysCount: 4 },
    ],
  },
];
