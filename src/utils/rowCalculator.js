export const totalRowCost = (page, setStateFunction) => {
    let total = 0
    for (const key in page) {
        if (key === 'designComplexity' || key === 'interactionAnimationComplexity' || key === 'integerationComplexity') {
            let costMultiplier;
            if (page[key] === 0) {
                costMultiplier = 0;
            } else if (page[key] === 1) {
                costMultiplier = 50;
            } else if (page[key] === 2) {
                costMultiplier = 100;
            } else if (page[key] === 3) {
                costMultiplier = 150;
            }
            total = total + page[key] * costMultiplier;
            setStateFunction(total)
        }
    }
}