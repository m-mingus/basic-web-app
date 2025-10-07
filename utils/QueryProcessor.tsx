export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("what is your andrew id?")) {
    return "mmingus";
  }

  if (query.toLowerCase().includes("name")) {
    return "mmingus";
  }

  if (query.toLowerCase().includes("what is your name?")){
    return "mmingus";
  }

  // Handle addition questions: "What is X plus Y?"
  const additionMatch = query.match(/what is (\d+) plus (\d+)/i);
  if (additionMatch) {
    const num1 = parseInt(additionMatch[1]);
    const num2 = parseInt(additionMatch[2]);
    return (num1 + num2).toString();
  }

  // Handle largest number questions: "Which of the following numbers is the largest: X, Y, Z?"
  const largestMatch = query.match(/which of the following numbers is the largest[:\s]+(\d+),\s*(\d+),\s*(\d+)/i);
  if (largestMatch) {
    const num1 = parseInt(largestMatch[1]);
    const num2 = parseInt(largestMatch[2]);
    const num3 = parseInt(largestMatch[3]);
    return Math.max(num1, num2, num3).toString();
  }

  return "";
}
