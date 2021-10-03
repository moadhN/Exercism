export const hey = (message) => {
    message = message.trim()

    if (message.match(/\?$/g)) {
        if (message.match((/[A-Z]+/g)) && !message.match((/[a-z]+/g))) return 'Calm down, I know what I\'m doing!'
        else return 'Sure.'
    }
    else if (message.match((/[A-Z]+/g)) && !message.match((/[a-z]+/g))) return 'Whoa, chill out!'
    else if (message.replace(/[ \\t\\r\\n\\f]+/g, '').trim() == '') return 'Fine. Be that way!'
    return 'Whatever.'
}