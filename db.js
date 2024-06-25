class db {
    static games = [
        {id: '1', title: 'Cyberpunk', platform: ['PC', 'PLAYSTATION 5']},
        {id: '2', title: 'Starfield', platform: ['PC', 'XBOX SERIES X', 'ATARI']},
        {id: '3', title: 'GTA V', platform: ['PC','XBOX SERIES X', 'PLAYSTATION 5']}
    ];
    static reviews = [
        {id: '1', rating: 4, content: 'bababab mala jeu', author_id: '1', game_id: '2'},
        {id: '2', rating: 5, content: 'bruv what is this ? this is epic', author_id: '4', game_id: '1'},
        {id: '3', rating: 1, content: 'te3b barcha jeu hedha', author_id: '4', game_id: '2'}
    ];
    static authors = [
        {id: '1', name: 'Todd Howard', verified: true},
        {id: '2', name: 'Karim Touati', verified: true},
        {id: '3', name: 'Bill Gates', verified: false},
        {id: '4', name: 'Bou Hmid', verified: false}
    ]
}

module.exports = db;