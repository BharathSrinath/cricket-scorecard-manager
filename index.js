// Translating the title -200% along the Y-axis once the page has been loaded
const pageload = document.querySelector('h1.title')
window.addEventListener('load', function () {
    pageload.classList.add('transition-active-pageload')
})

// .homepage-1 contains two input fields (.teamname1 and .teamname2) along with first next button (.firstnext)
const t1 = document.querySelector('.teamname1')
const t2 = document.querySelector('.teamname2')
const nextbtn1 = document.querySelector('.firstnext')

// Creating a transition effect with the help of opacity changing from 0 to 1
// Giving 1.5 seconds time so that the title transition is complete 
setTimeout(function () {
    t1.classList.add('t-active-t1')
    t2.classList.add('t-active-t2')
    nextbtn1.classList.add('t-active-next1')
}, 1500)

// When the first next button is clicked
nextbtn1.addEventListener('click', function () {
    nextbuttons(t1, t2, '*Enter both the teams name', '*Enter your team name', '*Enter your opponent team name')
    // Calling the function named 'nextbuttons' and passing the object events of .teamname1 (t1), .teamname2 (t2) and some strings to be displayed based on the condition.
    // Passing the strings too because we will be making use of the same function for homepage-2 too.    
    if (t1.value !== '' && t2.value !== '') {
        // We are dealing with empty values in input fields under nextbuttons().
        const hp1Hide = document.querySelector('.homepage-1');
        hp1Hide.classList.add('homepage-1-hide');
        // This will hide the homepage-1

        const nextbtn2 = document.querySelector('.secondnext');
        nextbtn2.classList.add('t-active-next2');
        // This will add the customisation to the second next button that will be displayed in homepage-2

        const hp2visible = document.querySelector('.homepage-2');
        hp2visible.classList.add('homepage-2-visible');
        // This will make the homepage-2 visible
    }
});

// .homepage-2 contains two input fields (.no-of-overs and .no-of-players) along with second next button (.secondnext)
const nOvers = document.querySelector('.no-of-overs')
const nPlayers = document.querySelector('.no-of-players')
const nextbtn2 = document.querySelector('.secondnext')

// Following selectors are used at the end of second eventListener (nextbtn2) to remove the default 11 players input fields in homepage-3 based on the input received form user in homepage-2 (.no-of-players)  
const team1Players = document.querySelectorAll('.team-1-players-name')
const team2Players = document.querySelectorAll('.team-2-players-name')

// To append the required text when input fields are empty
const t1Value = document.createElement('h1')
const t2Value = document.createElement('h1')

// When the second next button is clicked
nextbtn2.addEventListener('click', function () {
    nextbuttons(nOvers, nPlayers, '*Select the format and the number of players', '*Select the format', '*Select the number of players')
    if (nOvers.value !== '' && nPlayers.value !== '') {
        const hp2Hide = document.querySelector('.homepage-2');
        hp2Hide.classList.add('homepage-2-hide');
        // This will hide the homepage-2

        const nextbtn3 = document.querySelector('.thirdnext');
        nextbtn3.classList.add('t-active-next3');
        // This will add the customisation to the third next button that will be displayed in homepage-3

        const hp3visible = document.querySelector('.homepage-3');
        hp3visible.classList.add('homepage-3-visible');
        // This will make the homepage-3 visible

        pageload.remove(); // removing the title to accomodate all the 11 players

        // appending the team name in home-page to appear at the top of div.team-1-players and div.team-2-players
        t1Value.innerText = `Team ${t1.value}`
        t1Value.classList.add('team-name-title')
        const parentAppend1 = document.querySelector('div.team-1-players')
        parentAppend1.insertAdjacentElement('afterbegin', t1Value)

        t2Value.innerText = `Team ${t2.value}`
        t2Value.classList.add('team-name-title')
        const parentAppend2 = document.querySelector('div.team-2-players')
        parentAppend2.insertAdjacentElement('afterbegin', t2Value)

        //   Removes players who are greater than the value entered in ".no-of-players" by the user 
        let removePlayers = nPlayers.value;
        for (let i = 5; i < 11; i++) {
            if (removePlayers == i) {
                team1Players[i].remove();
                team2Players[i].remove();
                removePlayers++;
            }
        }
    }
});

const reqField1 = document.createElement('h6')
// We are creating the h6 element which will contain a text that will be displayed when input fields are left empty  

function nextbuttons(i, j, k, l, m) {
    // This function will append the required text and add animation to the input field based on the following conidtions
    if (i.value == '' && j.value == '') {
        i.classList.add('input-shake');
        i.addEventListener('animationend', function () {
            i.classList.remove('input-shake');
        });

        j.classList.add('input-shake');
        j.addEventListener('animationend', function () {
            j.classList.remove('input-shake');
        });

        reqField1.innerText = k;
        reqField1.classList.add('req-field-text');
        i.insertAdjacentElement('afterend', reqField1);
    }
    else if (i.value == '') {
        i.classList.add('input-shake');
        i.addEventListener('animationend', function () {
            i.classList.remove('input-shake');
        });

        reqField1.innerText = l;
        reqField1.classList.add('req-field-text');
        i.insertAdjacentElement('beforebegin', reqField1);
    }
    else if (j.value == '') {
        j.classList.add('input-shake');
        j.addEventListener('animationend', function () {
            j.classList.remove('input-shake');
        });

        reqField1.innerText = m;
        reqField1.classList.add('req-field-text');
        j.insertAdjacentElement('afterend', reqField1);
    }
}

const nextbtn3 = document.querySelector('.thirdnext')
const reqField2 = document.createElement('h6')
const reqField3 = document.createElement('h6')

const x = Math.floor(Math.random() * 2) + 1;
// x will be used to generate random number (1 or 2) and will be assigned to heads/tails

const coinHeads = document.querySelector('.coin-heads');
const coinTails = document.querySelector('.coin-tails');
// It deals with images of heads and tails

const tossDecision = document.createElement('h1');
// It will display the toss result

let capClicked, teamWonToss1, teamWonToss2;
// line of codes to extract the 'team name' from the variable which has both 'captain name' and the 'team name'

nextbtn3.addEventListener('click', function (e) {
    reqField2.innerText = '';
    reqField3.innerText = '';
    // Above lines will reset the text in required field everytime the button is clicked

    let count1 = 0;
    for (let i = 0; i < nPlayers.value; i++) {
        if (team1Players[i].value == '') {
            count1++;
            if (count1 === 1) {
                // Count variable is used to minimize the animation to one time irrespective of any number of empty input fields.
                // If the count variable is not used, it will animate 'n' times for 'n' empty input fields
                checkemptyfields(t1Value, reqField2, t1)
            }
        }
    }
    let count2 = 0;
    for (let i = 0; i < nPlayers.value; i++) {
        if (team2Players[i].value == '') {
            count2++;
            if (count2 === 1) {
                checkemptyfields(t2Value, reqField3, t2)
            }
        }
    }

    function checkemptyfields(i, j, k) {
        i.classList.add('input-shake');
        i.addEventListener('animationend', function () {
            i.classList.remove('input-shake');
        })
        j.innerText = `*Enter all the ${k.value} players`;
        j.classList.add('req-field-text');
        i.insertAdjacentElement('afterend', j);
    }

    if (count1 > 0 || count2 > 0) {
        e.preventDefault(); // even if one of the field is empty, it will be prevent the navigation to next slide
    }
    else {
        // else part is dealing with 
            // hides the current page
            // displays the next page
                //   
        const hp3Hide = document.querySelector('.homepage-3');
        hp3Hide.classList.add('homepage-3-hide');
        // This will hide the homepage-3

        const hp4visible = document.querySelector('.homepage-4');
        hp4visible.classList.add('homepage-4-visible');
        // This will display the next page

        const tossload = document.querySelector('h1.toss-title');
        tossload.classList.add('transition-active-tossload');
        // 'Its toss time' => This is the title that will shift 300% upwards

        const h1toss = document.querySelector('h1.toss-ques');
        setTimeout(function () {
            h1toss.classList.add('toss-ques-active');
            // 'Who is going to call' => This will appear with 0.5 seconds delay after the toss-title
        }, 500)

        // Buttons with captain and team names
        const t1CaptainToss = document.querySelector('.t1-captain-toss');
        t1CaptainToss.classList.add('t1-captain-toss-active');
        t1CaptainToss.innerText = `${team1Players[0].value} (${t1.value})`;
        
        // This will display the name of the captain and the team  

        const t2CaptainToss = document.querySelector('.t2-captain-toss');
        t2CaptainToss.classList.add('t2-captain-toss-active');
        t2CaptainToss.innerText = `${team2Players[0].value} (${t2.value})`;

        t1CaptainToss.addEventListener('click', function () {
            handleCaptainTossClick(t1CaptainToss, t2CaptainToss);
        })
        t2CaptainToss.addEventListener('click', function () {
            handleCaptainTossClick(t2CaptainToss, t1CaptainToss);
        })

        function handleCaptainTossClick(clicked, other) {
            // Once decided who is going to call the toss, this function will remove the other button and elevate the clicked button 
            capClicked = clicked.innerText; // Storing it in a variable to declare the toss result with team name 
            teamWonToss1 = capClicked.split('(');
            teamWonToss2 = teamWonToss1[1].split(')');

            coinHeads.classList.add('coin-heads-active')
            // coins will appear once the call for toss has been made by the captain
            coinTails.classList.add('coin-tails-active')

            other.style.display = 'none';
            clicked.style.transform = 'translateY(-300%)';
            clicked.style.transition = 'transform 1s';

            const headsBtn = document.querySelector('.heads');
            headsBtn.classList.add('heads-active');
            headsBtn.style.transform = 'translateY(-400%)';
            headsBtn.style.transition = 'transform 1s';

            const tailsBtn = document.querySelector('.tails');
            tailsBtn.classList.add('tails-active');
            tailsBtn.style.transform = 'translateY(-400%)';
            tailsBtn.style.transition = 'transform 1s';

            function animateCoin() {
                // We are using two images (heads and tails) which will be placed one over the other with the help of 'position:absolute' property. Depending up on the random number (1 or 2), heads or tails will be selected. With zIndex property, we will decide which should appear at the top.
                
                coinHeads.style.transform = 'translateY(100%)';
                coinHeads.style.transition = 'transform 1s';

                coinTails.style.transform = 'translateY(100%)';
                coinTails.style.transition = 'transform 1s';

                setTimeout(function () {
                    // Once heads/tails is clicked, coin will shift down and then move up with a spin 
                    coinTails.style.transform = 'translateY(-250%) rotateX(9000deg)';
                    coinTails.style.transition = 'transform 3s';

                    coinHeads.style.transform = 'translateY(-250%) rotateX(9000deg)';
                    coinHeads.style.transition = 'transform 3s';

                    // While the coin moves up, rest of the buttons around it will disappear
                    headsBtn.style.transform = 'translateX(-300%)';
                    headsBtn.style.opacity = '0';
                    headsBtn.style.transition = 'all 2s';

                    tailsBtn.style.transform = 'translateX(300%)';
                    tailsBtn.style.opacity = '0';
                    tailsBtn.style.transition = 'all 2s';

                    clicked.style.transform = 'translateY(-50%)';
                    clicked.style.opacity = '0';
                    clicked.style.transition = 'all 1s';

                    other.style.transform = 'translateY(-50%)';
                    other.style.opacity = '0';
                    other.style.transition = 'all 2s';

                    setTimeout(function () {
                        if (x == 1) { // tails
                            headsTails(coinTails, coinHeads, `It's Tails`, teamWonToss2[0])
                            }
                        else if (x == 2) { // heads
                            headsTails(coinHeads, coinTails, `It's Heads`, teamWonToss2[0])
                        }

                        function headsTails(i,j,k){
                            i.style.zIndex = '100';
                            j.style.zIndex = '0';
                            setTimeout(function () {
                                tossDecision.innerText = `${k}\n${teamWonToss2[0]} has won the toss`;
                                tossDecision.style.color = 'white';
                                tossDecision.style.textAlign = 'center'
                                tossDecision.classList.add('display-5')

                                const tossCall = document.querySelector('.toss-call')
                                tossCall.insertAdjacentElement('beforebegin', tossDecision);

                                const batDecision = document.querySelector('.bat');
                                batDecision.classList.add('bat-active');
                                
                                const bowlDecision = document.querySelector('.bowl');
                                bowlDecision.classList.add('bowl-active');
                            }, 2000)
                        }
                    }, 1000)
                }, 1500)
            } // End of animate function

            headsBtn.addEventListener('click', function () {
                animateCoin();
            })
            tailsBtn.addEventListener('click', function () {
                animateCoin();
            })

            tossload.remove();
            h1toss.remove();
            // Removing the toss title and toss question under the title
        }
    }
})

const bat = document.querySelector('.bat');
const bowl = document.querySelector('.bowl');
const letsPlay = document.querySelector('.letsplay');
// This will add the customisation to the lets play button that will be displayed in homepage-4

bat.addEventListener('click', function(){
    tossResult(bat.innerText);
})
bowl.addEventListener('click', function(){
    tossResult(bowl.innerText);
})

function tossResult(tossText){
    bat.classList.add('bat-hide');
    bowl.classList.add('bowl-hide');
    tossDecision.classList.add('tossDecision-remove');
    coinHeads.remove();
    coinTails.remove();

    const tossFinal = document.querySelector('.toss-final');
    setTimeout(function () {
        tossFinal.innerText = `"Team ${teamWonToss2[0]} has won the toss and \nelected to ${tossText} first"`
        tossFinal.classList.add('toss-final-active')
        setTimeout(function () {
            letsPlay.classList.add('t-active-letsplay');
        }, 500)
    }, 1500)
}