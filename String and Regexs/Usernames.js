function solve (arr) {
    let rezult = arr.map(s => s.split('@'));
    rezult = rezult.map(([user, domain]) => user + '.' + domain.split('.')
        .map(s => s[0]).join(''));
    console.log(rezult.join(', '))

}
solve(['peshoo@gmail.com',
    'todor_43@mail.dir.bg',
    'foo@bar.com',
    'bay.ivan@users.sf.net'
])