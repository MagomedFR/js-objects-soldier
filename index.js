let soldier = {
    name: 'Stalone',
    health: 10,
    weapon:{
        weaponName: 'Glock',
        numberCartridges: 30,
    },
    supplies: 3,

    shoot:function(){
        if(this.weapon.numberCartridges == 0){
            console.log('обойма пуста. Перезаредитесь')
        }else{
            this.weapon.numberCartridges --
            console.log('бах-бах')
        }
    },
    recharge:function(){
        if(this.supplies == 0){
           console.log('не осталось припасов') 
        }else{
            this.weapon.numberCartridges = 30
            this.supplies--
            console.log('перезарядка...')
        }
    },
    hurt:function(){
        if(this.health == 0){
            console.log('Ты проиграл')
        }else{
            this.health--
        }
    },
}