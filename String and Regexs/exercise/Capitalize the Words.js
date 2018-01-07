function capitalize(input) {
    console.log(input.toLowerCase()
        .split(' ')
        .map(w => w[0].toUpperCase() + w.substr(1))
        .join(' '));
}