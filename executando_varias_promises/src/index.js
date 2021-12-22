const increaseVelocity = function(velocityToIncrease) {
    return new Promise((resolve, reject) => {
        if(velocityToIncrease <= 0) {
            reject("Frenagem acionada")
        } else {
            resolve(velocityToIncrease * 0.9)
        }
    })
}

const newBatteryConsumption = function(currentVelocity, velocityToIncrease) {
    return new Promise((resolve, reject) => {
        let newBatteryConsumption = (currentVelocity + velocityToIncrease) / 1000
        if(newBatteryConsumption > 0) {
            resolve(newBatteryConsumption)
        } else {
            reject("Consumo zerado!")
        }
    })
}

let velocity = 70

let velocityIncreased = increaseVelocity(velocity)
let batteryConsumption = newBatteryConsumption(80, velocity)

Promise.all([velocityIncreased, batteryConsumption]).then(results => {
    console.log(results)
}).catch(errors => {
    console.log(errors)
})