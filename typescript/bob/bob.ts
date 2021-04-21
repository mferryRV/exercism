// Check if the greeting is more than half CAPS
const isYelling = (greeting: string) : boolean => {
  const yelled = greeting.match(/[A-Z]/g)
  const spoken = greeting.match(/[a-z]/g)
  return (yelled ? yelled.length : 0) > (spoken ? spoken.length : 0)
}

class Bob {
  hey(greeting: string) {
    // Evaluate greeting
    const isQuestion = !!greeting.trim().match(/\?$/)
    const isGreeting = !!greeting.match(/[A-Za-z0-9]/)
    const wasYelled = isYelling(greeting)

    // Pick response
    if (!isGreeting) {
      return 'Fine. Be that way!'
    } else if (!isQuestion && !wasYelled) {
      return 'Whatever.'
    } else if (!isQuestion && wasYelled) {
      return 'Whoa, chill out!'
    } else if (isQuestion && !wasYelled) {
      return 'Sure.'
    } else if (isQuestion && wasYelled) {
      return 'Calm down, I know what I\'m doing!'
    } else {
      return 'I\'ve been trying to reach you about your car\'s extended warranty.'
    }
  }
}

export default Bob
