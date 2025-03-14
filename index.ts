function isPalindrome(x: number): boolean {
  const digits = x.toString().split("").map(String);
  let left = 0,
    right = digits.length - 1;
  let result = false;

  while (left <= right) {
    if (digits[left] === digits[right]) {
      result = true;
    } else {
      result = false;
      break;
    }

    left++;
    right--;
  }

  return result;
}
