function calcAge() {
  const birthDate = new Date('1986-02-25T03:40:00.000+08:00');
  const now = new Date();
  const age = Math.trunc((now - birthDate) / (1000 * 60 * 60 * 24 * 365.25));

  return age;
}

export { calcAge };
