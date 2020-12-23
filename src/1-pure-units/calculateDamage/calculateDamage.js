function calculateDamage(attackersAttackStat, defendersDefenceStat) {
  if (attackersAttackStat - defendersDefenceStat > 0) {
      return attackersAttackStat - defendersDefenceStat;
  }
  return 0;
}

export default calculateDamage;