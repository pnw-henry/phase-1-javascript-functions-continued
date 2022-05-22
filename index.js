function saturdayFun(activity){
    if (!activity){
        return "This Saturday, I want to roller-skate!";
    }

    else
        return `This Saturday, I want to ${activity}!`;

}

function mondayWork(activity){
    if (!activity){
        return "This Monday, I will go to the office.";
    }

    else
        return `This Monday, I will ${activity}.`;
}


function wrapAdjective(visual){
    //Variable declaration and assignment for visual flair and adjective to use
    //when one isn't passed as arguments into the functions.
    let defaultAdjective = 'special';
    let defaultVisual = '*';
    //Returns the function receiving the adjective input.
    return function(adjective){
        //No visual flair entered.
        if (!visual){
            //No adjestive entered.
            if (!adjective){
                return `You are ${defaultVisual}${defaultAdjective}${defaultVisual}!`;
            }
            else
                return `You are ${defaultVisual}${adjective}${defaultVisual}!`;
        }
        else
            if (!adjective){
                return `You are ${visual}${defaultAdjective}${visual}!`;
            }
            else
                return `You are ${visual}${adjective}${visual}!`;
    }
}