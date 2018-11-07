// -- SOLUTIONS --

// MY SOLUTION

function zeros (n) {
  let trailingZeroes = 0
  while (n = Math.floor(n / 5)) trailingZeroes += n;
  return trailingZeroes
}
