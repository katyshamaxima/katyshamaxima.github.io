
var testIteration = [];

var id = 0;

var namesMyLove = ['катюша', 'катюшка', 'катя', 'катенька', 'киса', 'екатерина'];

var scene = document.getElementById('scene');

var title = document.getElementsByClassName('scene-title')[0];
var question = document.getElementsByClassName('scene-question')[0];
var input = document.getElementsByClassName('scene-input')[0];
var reactions = document.getElementsByClassName('scene-reactions')[0];
var button = document.getElementsByClassName('scene-btn')[0];

testIteration[0] = {
    title: 'Привет, ты кто?',
    question: 'Мы тут одну особу ждём. А тебя как зовут?',
    trueAnswers: namesMyLove,
    trueReaction: 'Приветик моя хорошая, так и занл что это ты!',
    falseReactions: 'Хм.. Мне кажется ты не права'
};

testIteration[1] = {
    title: 'Привет моя хорошая',
    question: 'Вот тебе уже и 20, не знаю даже, что тебе сказать. Я тебя очень люблю. Мы с тобой уже через многое прошли и ещё многое предстоит. Хочу, чтобы у тебя было всё чего пожелаешь, я буду помогать тебе в этом, как смогу. Я бы очень хотел написать круто и классно, но что-то не выходит, не очень я талантлив наверное. <br> Ты у меня очень крутая, смелая, сильная, умная, <b>красивая</b>. Всё что у меня выходит, это твоя заслуга, я очень-очень счастлив быть с тобой, пусть иногда я и веду себя как дед, прости меня за это. <br> Простишь?',
    trueAnswers: ['да', 'конечно', 'киса', 'прощаю', 'прощу', ':*'],
    trueReaction: 'Любовь моя',
    falseReactions: ':('
};

testIteration[2] = {
    title: 'Моя любимая Катя',
    question: 'Если хочешь получить подарок, подойти и поцелуй меня.',
    trueAnswers: ['иду', 'сейчас', 'да'],
    trueReaction: ':',
    falseReactions: ':('
};

function iteration() {


    if (scene.classList.contains('fadeInRight')) {
        scene.classList.remove('fadeInRight');
    }

    var timeout = 1000;

    if (scene.classList.contains('fadeInLeft')) {
        scene.classList.remove('fadeInLeft');
    }

    setTimeout(function () {

        if (id === testIteration.length - 1) {
            input.style = "display: none;";
            button.style = "display: none;"
        }

        input.value = '';

        title.innerHTML = testIteration[id].title;

        question.innerHTML = testIteration[id].question;

        scene.classList.add('fadeInRight');

    }, 1000);

}

function process() {
    if (input.innerText = '') {
        reactions.innerText = 'Нужно записать ответ';
        return;
    }

    reactions.innerText = '';

    var answer = input.value.toLowerCase();

    var isTrueAnswer = testIteration[id].trueAnswers.filter(function (value) {
        return value === answer
    }).length === 1;

    console.log(isTrueAnswer, answer);

    if (isTrueAnswer) {
        id++;
        iteration();
    } else {
        reactions.innerText = testIteration[id].falseReactions;
    }

}

button.onclick = process;

window.onkeydown = function (ev) {
    if (ev.keyCode === 13) {
        process()
    }
};

window.onload = function (ev) {

    body.classList.remove('notVisible');

    scene.classList.remove('notVisible');

    input.value = '';

    title.innerHTML = testIteration[id].title;

    question.innerHTML = testIteration[id].question;

    scene.classList.add('fadeInRight');

    iteration()
};
