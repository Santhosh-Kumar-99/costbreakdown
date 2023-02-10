export function columnCalculator(tableState, complexity, setState, setTotal, total) {
    let cost = 0
    if (tableState.length !== 0) {
        tableState.forEach((element) => {
            let costMultiplier;
            if (element[complexity] === 0) {
                costMultiplier = 0;
            } else if (element[complexity] === 1) {
                costMultiplier = 50;
            } else if (element[complexity] === 2) {
                costMultiplier = 100;
            } else if (element[complexity] === 3) {
                costMultiplier = 150;
            }
            cost = cost + element[complexity] * costMultiplier;
        });



    }
    setState(cost);
    if (complexity === 'designComplexity') {
        setTotal([total[0] = cost, total[1], total[2]])
    } else if (complexity === 'interactionAnimationComplexity') {
        setTotal([total[0], total[1] = cost, total[2]])
    } else {
        setTotal([total[0], total[1], total[2] = cost])
    }




}