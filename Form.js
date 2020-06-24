class Form{
    constructor(){
        this.greeting = createElement('h2');
        this.input = createInput("");
        this.input.style('width', '160px');
        this.email = createInput("");
        this.email.style('width', '160px');
        this.button = createButton('Submit'); 
        this.title = createElement('h2');
        this.name = createElement('h4');
        this.emailinput = createElement('h4');
        this.reset = createButton('Reset');


        

        

        
        this.question1 = createElement('h4', "");
        this.radio = createRadio('h4');
        this.radio.option('YES');
        this.radio.option('NO');
        this.radio.style('width', '60px');

        
        this.question2 = createElement('h4', "");
        this.radio1 = createRadio('h5');
        this.radio1.option('YES');
        this.radio1.option('NO');
        this.radio1.style('width', '60px');

       
        this.question3 = createElement('h4', );
        this.radio2 = createRadio('h5');
        this.radio2.option('100 to 300');
        this.radio2.option('300 to 600');
        this.radio2.option('600 to 900');
        this.radio2.option('900 & more');
        this.radio2.style('width', '121px');

       
        this.question4 = createElement('h4', "");
        this.radio3 = createRadio('h5');
        this.radio3.option('WEEKDAYS');
        this.radio3.option('WEEKENDS');
        this.radio3.option('EVERYDAY');
        this.radio3.style('width', '140px');

        this.description = createInput("Please add your comments here");
        this.description.style('width','420px');
        this.description.style('height','100px');

        this.desc= createElement('h4',"ADDITIONAL COMMENTS");

        

        
    }
    display(){
        this.title.html("SURVEY FORM");
        this.title.position(650,60);
        this.name.html("Your Name");
        
        this.emailinput.html("Your Email");
        
        this.description.style('color', 'rgb(237, 227, 227)');
        this.description.style('font-size', '20px');

       

        this.button.mousePressed(() => {
            this.greeting.show();
            this.description.hide();
            this.greeting.html("Thanks for your Submission!!");
            this.greeting.position(displayWidth/2-30,810);
            this.greeting.style('width', '500px');
            this.greeting.style('height', '50px');
            this.greeting.style('background','lavender');
            this.greeting.style('padding','30px');
            //User.getCount();
            User.input = this.input.value();
            User.email = this.email.value();
            User.radio= this.radio.value();
            User.radio1= this.radio1.value();
            User.radio2= this.radio2.value();
            User.radio3= this.radio3.value();
            pplCount += 1;
            User.index = pplCount;
            User.update();
            User.updateCount(pplCount);
            
//do u think online studies are good enough for students? iS THIS AN OPTION FOR future, should we try and come back to
// normal classroom, would you send ur child to school this year?

            
        });
        this.reset.mousePressed(() => { 
          this.greeting.hide();
          this.description.show();
          this.input.value('');
          this.email.value('');
          this.radio.value();
          this.radio1.value();
          this.radio2.value();
          this.radio3.value();
        });    
    }
}