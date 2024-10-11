let input = require("readline-sync");
console.log("__$moky testy foods__");
console.log("\n1.Monday \n2.Tuesday \n3.Wednesday \n4.Thursday \n5.Friday \n6.Saturday");
let day = (input.question('Enter Day :-'));
if (day == 1) {
    console.log('1.Breackfast \n2.Lunch \n3.Dinner');
    let time = (input.question('Enter your time :-'));
    if (time == 1) {
        console.log('1.Maggie \n2.Paratha');
        let dish = (input.question("Enter your dise :- "));
        if (dish == 1) {
            console.log("Maggie");
            console.log("1.Half plate:- 50$ \n2. Full plate:-100$");
            let order = (input.question('order your plate:-'));
            if (order == 1) {
                console.log('1.Half plate:-50$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 50) {
                    console.log("~Thank you~");
                } else if (pay > 50) {
                    let extra = pay - 50;
                    console.log("return extra money~" + extra);
                } else if (pay < 50) {
                    let less = 50 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            } if (order == 2) {
                console.log('2.Full plate:-100$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 100) {
                    console.log("~Thank you~");
                } else if (pay > 100) {
                    let extra = pay - 100;
                    console.log("return extra money~" + extra);
                } else if (pay < 100) {
                    let less = 100 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks a lot for treat sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            }
        } else if (dish == 2) {
            console.log("Paratha");
            console.log("1.Half plate:- 50$ \n2. Full plate:-100$");
            let order = (input.question('order your plate:-'));
            if (order == 1) {
                console.log('1.Half plate:-50$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 50) {
                    console.log("~Thank you~");
                } else if (pay > 50) {
                    let extra = pay - 50;
                    console.log("return extra money~" + extra);
                } else if (pay < 50) {
                    let less = 50 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            } if (order == 2) {
                console.log('2.Full plate:-100$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 100) {
                    console.log("~Thank you~");
                } else if (pay > 100) {
                    let extra = pay - 100;
                    console.log("return extra money~" + extra);
                } else if (pay < 100) {
                    let less = 100 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks a lot for treat sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
               
                }    
            
            }                    
       
        }        
    
    }else if (time == 2) {
        console.log('1.Sandwich \n2.Noodles');
        let dish = (input.question("Enter your dise :- "));
        if (dish == 1) {
            console.log("Sanwich");
            console.log("1.Half plate:- 150$ \n2. Full plate:-300$");
            let order = (input.question('order your plate:-'));
            if (order == 1) {
                console.log('1.Half plate:-150$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 150) {
                    console.log("~Thank you~");
                } else if (pay > 150) {
                    let extra = pay - 150;
                    console.log("return extra money~" + extra);
                } else if (pay < 150) {
                    let less = 150 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            } if (order == 2) {
                console.log('2.Full plate:-300$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 300) {
                    console.log("~Thank you~");
                } else if (pay > 300) {
                    let extra = pay - 300;
                    console.log("return extra money~" + extra);
                } else if (pay < 300) {
                    let less = 300 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks a lot for treat sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            }
        } else if (dish == 2) {
            console.log("Noodles");
            console.log("1.Half plate:- 150$ \n2. Full plate:-300$");
            let order = (input.question('order your plate:-'));
            if (order == 1) {
                console.log('1.Half plate:-150$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 150) {
                    console.log("~Thank you~");
                } else if (pay > 150) {
                    let extra = pay - 150;
                    console.log("return extra money~" + extra);
                } else if (pay < 150) {
                    let less = 150 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            } if (order == 2) {
                console.log('2.Full plate:-300$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 300) {
                    console.log("~Thank you~");
                } else if (pay > 300) {
                    let extra = pay - 300;
                    console.log("return extra money~" + extra);
                } else if (pay < 300) {
                    let less = 300 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks a lot for treat sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
               
                }    
            
            }                    
       
        }        
    
    } else if (time == 3) {
        console.log('1.Grilled vegetables \n2.Dal tadka with rice');
        let dish = (input.question("Enter your dise :- "));
        if (dish == 1) {
            console.log("Grilled vegetables");
            console.log("1.Half plate:- 250$ \n2. Full plate:-500$");
            let order = (input.question('order your plate:-'));
            if (order == 1) {
                console.log('1.Half plate:-250$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 250) {
                    console.log("~Thank you~");
                } else if (pay > 250) {
                    let extra = pay - 250;
                    console.log("return extra money~" + extra);
                } else if (pay < 250) {
                    let less = 250 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            } if (order == 2) {
                console.log('2.Full plate:-500$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 500) {
                    console.log("~Thank you~");
                } else if (pay > 500) {
                    let extra = pay - 500;
                    console.log("return extra money~" + extra);
                } else if (pay < 500) {
                    let less = 500 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks a lot for treat sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            }
        } else if (dish == 2) {
            console.log("Dal tadka with rice");
            console.log("1.Half plate:- 250$ \n2. Full plate:-500$");
            let order = (input.question('order your plate:-'));
            if (order == 1) {
                console.log('1.Half plate:-250$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 250) {
                    console.log("~Thank you~");
                } else if (pay > 250) {
                    let extra = pay - 250;
                    console.log("return extra money~" + extra);
                } else if (pay < 250) {
                    let less = 250 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            } if (order == 2) {
                console.log('2.Full plate:-500$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 500) {
                    console.log("~Thank you~");
                } else if (pay > 500) {
                    let extra = pay - 500;
                    console.log("return extra money~" + extra);
                } else if (pay < 500) {
                    let less = 500 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks a lot for treat sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
               
                }    
            
            }                    
       
        }        
    
    }

}else if (day == 2) {
    console.log('1.Breackfast \n2.Lunch \n3.Dinner');
    let time = (input.question('Enter your time :-'));
    if (time == 1) {
        console.log('1.Pancakes \n2.Toast with butter');
        let dish = (input.question("Enter your dise :- "));
        if (dish == 1) {
            console.log("Pancakes");
            console.log("1.Half plate:- 55$ \n2. Full plate:-110$");
            let order = (input.question('order your plate:-'));
            if (order == 1) {
                console.log('1.Half plate:-55$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 55) {
                    console.log("~Thank you~");
                } else if (pay > 55) {
                    let extra = pay - 55;
                    console.log("return extra money~" + extra);
                } else if (pay < 55) {
                    let less = 55 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            } if (order == 2) {
                console.log('2.Full plate:-110$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 110) {
                    console.log("~Thank you~");
                } else if (pay > 110) {
                    let extra = pay - 110;
                    console.log("return extra money~" + extra);
                } else if (pay < 110) {
                    let less = 110 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks a lot for treat sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            }
        } else if (dish == 2) {
            console.log("Toast with butter");
            console.log("1.Half plate:- 55$ \n2. Full plate:-110$");
            let order = (input.question('order your plate:-'));
            if (order == 1) {
                console.log('1.Half plate:-55$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 55) {
                    console.log("~Thank you~");
                } else if (pay > 55) {
                    let extra = pay - 55;
                    console.log("return extra money~" + extra);
                } else if (pay < 55) {
                    let less = 55 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            } if (order == 2) {
                console.log('2.Full plate:-110$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 110) {
                    console.log("~Thank you~");
                } else if (pay > 110) {
                    let extra = pay - 110;
                    console.log("return extra money~" + extra);
                } else if (pay < 110) {
                    let less = 110 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks a lot for treat sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
               
                }    
            
            }                    
       
        }        
    
    }else if (time == 2) {
        console.log('1.Salad \n2.Biryani');
        let dish = (input.question("Enter your dise :- "));
        if (dish == 1) {
            console.log("Salad");
            console.log("1.Half plate:- 150$ \n2. Full plate:-300$");
            let order = (input.question('order your plate:-'));
            if (order == 1) {
                console.log('1.Half plate:-150$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 150) {
                    console.log("~Thank you~");
                } else if (pay > 150) {
                    let extra = pay - 150;
                    console.log("return extra money~" + extra);
                } else if (pay < 150) {
                    let less = 150 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            } if (order == 2) {
                console.log('2.Full plate:-300$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 300) {
                    console.log("~Thank you~");
                } else if (pay > 300) {
                    let extra = pay - 300;
                    console.log("return extra money~" + extra);
                } else if (pay < 300) {
                    let less = 300 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks a lot for treat sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            }
        } else if (dish == 2) {
            console.log("Biryani");
            console.log("1.Half plate:- 150$ \n2. Full plate:-300$");
            let order = (input.question('order your plate:-'));
            if (order == 1) {
                console.log('1.Half plate:-150$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 150) {
                    console.log("~Thank you~");
                } else if (pay > 150) {
                    let extra = pay - 150;
                    console.log("return extra money~" + extra);
                } else if (pay < 150) {
                    let less = 150 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            } if (order == 2) {
                console.log('2.Full plate:-300$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 300) {
                    console.log("~Thank you~");
                } else if (pay > 300) {
                    let extra = pay - 300;
                    console.log("return extra money~" + extra);
                } else if (pay < 300) {
                    let less = 300 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks a lot for treat sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
               
                }    
            
            }                    
       
        }        
    
    } else if (time == 3) {
        console.log('1.Chiken curry with rice \n2. Roti with sabji');
        let dish = (input.question("Enter your dise :- "));
        if (dish == 1) {
            console.log("Chiken curry with rice");
            console.log("1.Half plate:- 250$ \n2. Full plate:-500$");
            let order = (input.question('order your plate:-'));
            if (order == 1) {
                console.log('1.Half plate:-250$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 250) {
                    console.log("~Thank you~");
                } else if (pay > 250) {
                    let extra = pay - 250;
                    console.log("return extra money~" + extra);
                } else if (pay < 250) {
                    let less = 250 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            } if (order == 2) {
                console.log('2.Full plate:-500$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 500) {
                    console.log("~Thank you~");
                } else if (pay > 500) {
                    let extra = pay - 500;
                    console.log("return extra money~" + extra);
                } else if (pay < 500) {
                    let less = 500 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks a lot for treat sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            }
        } else if (dish == 2) {
            console.log("Roti with sabzi");
            console.log("1.Half plate:- 250$ \n2. Full plate:-500$");
            let order = (input.question('order your plate:-'));
            if (order == 1) {
                console.log('1.Half plate:-250$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 250) {
                    console.log("~Thank you~");
                } else if (pay > 250) {
                    let extra = pay - 250;
                    console.log("return extra money~" + extra);
                } else if (pay < 250) {
                    let less = 250 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            } if (order == 2) {
                console.log('2.Full plate:-500$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 500) {
                    console.log("~Thank you~");
                } else if (pay > 500) {
                    let extra = pay - 500;
                    console.log("return extra money~" + extra);
                } else if (pay < 500) {
                    let less = 500 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks a lot for treat sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
               
                }    
            
            }                    
       
        }        
    
    }

}else if (day == 3) {
    console.log('1.Breackfast \n2.Lunch \n3.Dinner');
    let time = (input.question('Enter your time :-'));
    if (time == 1) {
        console.log('1.Oatmeal \n2.Poha');
        let dish = (input.question("Enter your dise :- "));
        if (dish == 1) {
            console.log("Oatmeal");
            console.log("1.Half plate:- 35$ \n2. Full plate:-70$");
            let order = (input.question('order your plate:-'));
            if (order == 1) {
                console.log('1.Half plate:-35$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 35) {
                    console.log("~Thank you~");
                } else if (pay > 35) {
                    let extra = pay - 35;
                    console.log("return extra money~" + extra);
                } else if (pay < 35) {
                    let less = 35 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            } if (order == 2) {
                console.log('2.Full plate:-70$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 70) {
                    console.log("~Thank you~");
                } else if (pay > 70) {
                    let extra = pay - 70;
                    console.log("return extra money~" + extra);
                } else if (pay < 70) {
                    let less = 70 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks a lot for treat sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            }
        } else if (dish == 2) {
            console.log("Poha");
            console.log("1.Half plate:- 35$ \n2. Full plate:-70$");
            let order = (input.question('order your plate:-'));
            if (order == 1) {
                console.log('1.Half plate:-35$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 35) {
                    console.log("~Thank you~");
                } else if (pay > 35) {
                    let extra = pay - 35;
                    console.log("return extra money~" + extra);
                } else if (pay < 35) {
                    let less = 35 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            } if (order == 2) {
                console.log('2.Full plate:-70$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 70) {
                    console.log("~Thank you~");
                } else if (pay > 70) {
                    let extra = pay - 70;
                    console.log("return extra money~" + extra);
                } else if (pay < 70) {
                    let less = 70 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks a lot for treat sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
               
                }    
            
            }                    
       
        }        
    
    }else if (time == 2) {
        console.log('1.Sandwich \n2.Noodles');
        let dish = (input.question("Enter your dise :- "));
        if (dish == 1) {
            console.log("Sanwich");
            console.log("1.Half plate:- 150$ \n2. Full plate:-300$");
            let order = (input.question('order your plate:-'));
            if (order == 1) {
                console.log('1.Half plate:-150$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 150) {
                    console.log("~Thank you~");
                } else if (pay > 150) {
                    let extra = pay - 150;
                    console.log("return extra money~" + extra);
                } else if (pay < 150) {
                    let less = 150 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            } if (order == 2) {
                console.log('2.Full plate:-300$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 300) {
                    console.log("~Thank you~");
                } else if (pay > 300) {
                    let extra = pay - 300;
                    console.log("return extra money~" + extra);
                } else if (pay < 300) {
                    let less = 300 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks a lot for treat sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            }
        } else if (dish == 2) {
            console.log("Noodles");
            console.log("1.Half plate:- 150$ \n2. Full plate:-300$");
            let order = (input.question('order your plate:-'));
            if (order == 1) {
                console.log('1.Half plate:-150$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 150) {
                    console.log("~Thank you~");
                } else if (pay > 150) {
                    let extra = pay - 150;
                    console.log("return extra money~" + extra);
                } else if (pay < 150) {
                    let less = 150 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            } if (order == 2) {
                console.log('2.Full plate:-300$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 300) {
                    console.log("~Thank you~");
                } else if (pay > 300) {
                    let extra = pay - 300;
                    console.log("return extra money~" + extra);
                } else if (pay < 300) {
                    let less = 300 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks a lot for treat sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
               
                }    
            
            }                    
       
        }        
    
    } else if (time == 3) {
        console.log('1.Mutton curry \n2.Paneer butter masala');
        let dish = (input.question("Enter your dise :- "));
        if (dish == 1) {
            console.log("Mutton curry");
            console.log("1.Half plate:- 250$ \n2. Full plate:-500$");
            let order = (input.question('order your plate:-'));
            if (order == 1) {
                console.log('1.Half plate:-250$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 250) {
                    console.log("~Thank you~");
                } else if (pay > 250) {
                    let extra = pay - 250;
                    console.log("return extra money~" + extra);
                } else if (pay < 250) {
                    let less = 250 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            } if (order == 2) {
                console.log('2.Full plate:-500$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 500) {
                    console.log("~Thank you~");
                } else if (pay > 500) {
                    let extra = pay - 500;
                    console.log("return extra money~" + extra);
                } else if (pay < 500) {
                    let less = 500 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks a lot for treat sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            }
        } else if (dish == 2) {
            console.log("Paneer butter masala");
            console.log("1.Half plate:- 250$ \n2. Full plate:-500$");
            let order = (input.question('order your plate:-'));
            if (order == 1) {
                console.log('1.Half plate:-250$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 250) {
                    console.log("~Thank you~");
                } else if (pay > 250) {
                    let extra = pay - 250;
                    console.log("return extra money~" + extra);
                } else if (pay < 250) {
                    let less = 250 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            } if (order == 2) {
                console.log('2.Full plate:-500$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 500) {
                    console.log("~Thank you~");
                } else if (pay > 500) {
                    let extra = pay - 500;
                    console.log("return extra money~" + extra);
                } else if (pay < 500) {
                    let less = 500 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks a lot for treat sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
               
                }    
            
            }                    
       
        }        
    
    }

}else if (day == 4) {
    console.log('1.Breackfast \n2.Lunch \n3.Dinner');
    let time = (input.question('Enter your time :-'));
    if (time == 1) {
        console.log('1.Muffins \n2.Cereal with milk');
        let dish = (input.question("Enter your dise :- "));
        if (dish == 1) {
            console.log("Muffins");
            console.log("1.Half plate:- 75$ \n2. Full plate:-150$");
            let order = (input.question('order your plate:-'));
            if (order == 1) {
                console.log('1.Half plate:-75$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 75) {
                    console.log("~Thank you~");
                } else if (pay > 75) {
                    let extra = pay - 75;
                    console.log("return extra money~" + extra);
                } else if (pay < 75) {
                    let less = 75 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            } if (order == 2) {
                console.log('2.Full plate:-150$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 150) {
                    console.log("~Thank you~");
                } else if (pay > 150) {
                    let extra = pay - 150;
                    console.log("return extra money~" + extra);
                } else if (pay < 150) {
                    let less = 150 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks a lot for treat sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            }
        } else if (dish == 2) {
            console.log("Cereal and milk");
            console.log("1.Half plate:- 75$ \n2. Full plate:-150$");
            let order = (input.question('order your plate:-'));
            if (order == 1) {
                console.log('1.Half plate:-75$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 75) {
                    console.log("~Thank you~");
                } else if (pay > 75) {
                    let extra = pay - 75;
                    console.log("return extra money~" + extra);
                } else if (pay < 75) {
                    let less = 75 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            } if (order == 2) {
                console.log('2.Full plate:-150$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 150) {
                    console.log("~Thank you~");
                } else if (pay > 150) {
                    let extra = pay - 150;
                    console.log("return extra money~" + extra);
                } else if (pay < 150) {
                    let less = 150 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks a lot for treat sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
               
                }    
            
            }                    
       
        }        
    
    }else if (time == 2) {
        console.log('1.Veg Pulao \n2.Soup');
        let dish = (input.question("Enter your dise :- "));
        if (dish == 1) {
            console.log("Veg Pulao");
            console.log("1.Half plate:- 153$ \n2. Full plate:-306$");
            let order = (input.question('order your plate:-'));
            if (order == 1) {
                console.log('1.Half plate:-153$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 153) {
                    console.log("~Thank you~");
                } else if (pay > 153) {
                    let extra = pay - 153;
                    console.log("return extra money~" + extra);
                } else if (pay < 153) {
                    let less = 153 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            } if (order == 2) {
                console.log('2.Full plate:-300$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 306) {
                    console.log("~Thank you~");
                } else if (pay > 306) {
                    let extra = pay - 306;
                    console.log("return extra money~" + extra);
                } else if (pay < 306) {
                    let less = 306 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks a lot for treat sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            }
        } else if (dish == 2) {
            console.log("Soup");
            console.log("1.Half plate:- 153$ \n2. Full plate:-306$");
            let order = (input.question('order your plate:-'));
            if (order == 1) {
                console.log('1.Half plate:-156$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 156) {
                    console.log("~Thank you~");
                } else if (pay > 156) {
                    let extra = pay - 156;
                    console.log("return extra money~" + extra);
                } else if (pay < 156) {
                    let less = 156 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            } if (order == 2) {
                console.log('2.Full plate:-306$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 306) {
                    console.log("~Thank you~");
                } else if (pay > 306) {
                    let extra = pay - 306;
                    console.log("return extra money~" + extra);
                } else if (pay < 306) {
                    let less = 306- pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks a lot for treat sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
               
                }    
            
            }                    
       
        }        
    
    } else if (time == 3) {
        console.log('1.Stir-fry vegetbles\n2.Pizza');
        let dish = (input.question("Enter your dise :- "));
        if (dish == 1) {
            console.log("Stir-fry vegetables");
            console.log("1.Half plate:- 250$ \n2. Full plate:-500$");
            let order = (input.question('order your plate:-'));
            if (order == 1) {
                console.log('1.Half plate:-250$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 250) {
                    console.log("~Thank you~");
                } else if (pay > 250) {
                    let extra = pay - 250;
                    console.log("return extra money~" + extra);
                } else if (pay < 250) {
                    let less = 250 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            } if (order == 2) {
                console.log('2.Full plate:-500$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 500) {
                    console.log("~Thank you~");
                } else if (pay > 500) {
                    let extra = pay - 500;
                    console.log("return extra money~" + extra);
                } else if (pay < 500) {
                    let less = 500 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks a lot for treat sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            }
        } else if (dish == 2) {
            console.log("Pizza");
            console.log("1.Half plate:- 250$ \n2. Full plate:-500$");
            let order = (input.question('order your plate:-'));
            if (order == 1) {
                console.log('1.Half plate:-250$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 250) {
                    console.log("~Thank you~");
                } else if (pay > 250) {
                    let extra = pay - 250;
                    console.log("return extra money~" + extra);
                } else if (pay < 250) {
                    let less = 250 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            } if (order == 2) {
                console.log('2.Full plate:-500$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 500) {
                    console.log("~Thank you~");
                } else if (pay > 500) {
                    let extra = pay - 500;
                    console.log("return extra money~" + extra);
                } else if (pay < 500) {
                    let less = 500 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks a lot for treat sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
               
                }    
            
            }                    
       
        }        
    
    }

}else if (day == 5) {
    console.log('1.Breackfast \n2.Lunch \n3.Dinner');
    let time = (input.question('Enter your time :-'));
    if (time == 1) {
        console.log('1.Idli \n2.Dosa');
        let dish = (input.question("Enter your dise :- "));
        if (dish == 1) {
            console.log("Idli");
            console.log("1.Half plate:- 50$ \n2. Full plate:-100$");
            let order = (input.question('order your plate:-'));
            if (order == 1) {
                console.log('1.Half plate:-50$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 50) {
                    console.log("~Thank you~");
                } else if (pay > 50) {
                    let extra = pay - 50;
                    console.log("return extra money~" + extra);
                } else if (pay < 50) {
                    let less = 50 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            } if (order == 2) {
                console.log('2.Full plate:-100$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 100) {
                    console.log("~Thank you~");
                } else if (pay > 100) {
                    let extra = pay - 100;
                    console.log("return extra money~" + extra);
                } else if (pay < 100) {
                    let less = 100 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks a lot for treat sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            }
        } else if (dish == 2) {
            console.log("Dosa");
            console.log("1.Half plate:- 50$ \n2. Full plate:-100$");
            let order = (input.question('order your plate:-'));
            if (order == 1) {
                console.log('1.Half plate:-50$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 50) {
                    console.log("~Thank you~");
                } else if (pay > 50) {
                    let extra = pay - 50;
                    console.log("return extra money~" + extra);
                } else if (pay < 50) {
                    let less = 50 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            } if (order == 2) {
                console.log('2.Full plate:-100$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 100) {
                    console.log("~Thank you~");
                } else if (pay > 100) {
                    let extra = pay - 100;
                    console.log("return extra money~" + extra);
                } else if (pay < 100) {
                    let less = 100 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks a lot for treat sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
               
                }    
            
            }                    
       
        }        
    
    }else if (time == 2) {
        console.log('1.Fried rice  \n2.Paneer tikka');
        let dish = (input.question("Enter your dise :- "));
        if (dish == 1) {
            console.log("Fried rice");
            console.log("1.Half plate:- 150$ \n2. Full plate:-300$");
            let order = (input.question('order your plate:-'));
            if (order == 1) {
                console.log('1.Half plate:-150$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 150) {
                    console.log("~Thank you~");
                } else if (pay > 150) {
                    let extra = pay - 150;
                    console.log("return extra money~" + extra);
                } else if (pay < 150) {
                    let less = 150 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            } if (order == 2) {
                console.log('2.Full plate:-300$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 300) {
                    console.log("~Thank you~");
                } else if (pay > 300) {
                    let extra = pay - 300;
                    console.log("return extra money~" + extra);
                } else if (pay < 300) {
                    let less = 300 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks a lot for treat sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            }
        } else if (dish == 2) {
            console.log("Paneer tikka");
            console.log("1.Half plate:- 150$ \n2. Full plate:-300$");
            let order = (input.question('order your plate:-'));
            if (order == 1) {
                console.log('1.Half plate:-150$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 150) {
                    console.log("~Thank you~");
                } else if (pay > 150) {
                    let extra = pay - 150;
                    console.log("return extra money~" + extra);
                } else if (pay < 150) {
                    let less = 150 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            } if (order == 2) {
                console.log('2.Full plate:-300$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 300) {
                    console.log("~Thank you~");
                } else if (pay > 300) {
                    let extra = pay - 300;
                    console.log("return extra money~" + extra);
                } else if (pay < 300) {
                    let less = 300 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks a lot for treat sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
               
                }    
            
            }                    
       
        }        
    
    } else if (time == 3) {
        console.log('1.Spagheti \n2.Chapati with curry');
        let dish = (input.question("Enter your dise :- "));
        if (dish == 1) {
            console.log("Spagheti");
            console.log("1.Half plate:- 250$ \n2. Full plate:-500$");
            let order = (input.question('order your plate:-'));
            if (order == 1) {
                console.log('1.Half plate:-250$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 250) {
                    console.log("~Thank you~");
                } else if (pay > 250) {
                    let extra = pay - 250;
                    console.log("return extra money~" + extra);
                } else if (pay < 250) {
                    let less = 250 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            } if (order == 2) {
                console.log('2.Full plate:-500$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 500) {
                    console.log("~Thank you~");
                } else if (pay > 500) {
                    let extra = pay - 500;
                    console.log("return extra money~" + extra);
                } else if (pay < 500) {
                    let less = 500 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks a lot for treat sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            }
        } else if (dish == 2) {
            console.log("Chapati and curry");
            console.log("1.Half plate:- 250$ \n2. Full plate:-500$");
            let order = (input.question('order your plate:-'));
            if (order == 1) {
                console.log('1.Half plate:-250$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 250) {
                    console.log("~Thank you~");
                } else if (pay > 250) {
                    let extra = pay - 250;
                    console.log("return extra money~" + extra);
                } else if (pay < 250) {
                    let less = 250 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            } if (order == 2) {
                console.log('2.Full plate:-500$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 500) {
                    console.log("~Thank you~");
                } else if (pay > 500) {
                    let extra = pay - 500;
                    console.log("return extra money~" + extra);
                } else if (pay < 500) {
                    let less = 500 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks a lot for treat sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
               
                }    
            
            }                    
       
        }        
    
    }

}else if (day == 6) {
    console.log('1.Breackfast \n2.Lunch \n3.Dinner');
    let time = (input.question('Enter your time :-'));
    if (time == 1) {
        console.log('1.Scrambled eggs \n2.Smoothie');
        let dish = (input.question("Enter your dise :- "));
        if (dish == 1) {
            console.log("Scrambled eggs");
            console.log("1.Half plate:- 50$ \n2. Full plate:-100$");
            let order = (input.question('order your plate:-'));
            if (order == 1) {
                console.log('1.Half plate:-50$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 50) {
                    console.log("~Thank you~");
                } else if (pay > 50) {
                    let extra = pay - 50;
                    console.log("return extra money~" + extra);
                } else if (pay < 50) {
                    let less = 50 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            } if (order == 2) {
                console.log('2.Full plate:-100$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 100) {
                    console.log("~Thank you~");
                } else if (pay > 100) {
                    let extra = pay - 100;
                    console.log("return extra money~" + extra);
                } else if (pay < 100) {
                    let less = 100 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks a lot for treat sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            }
        } else if (dish == 2) {
            console.log("moothie");
            console.log("1.Half plate:- 50$ \n2. Full plate:-100$");
            let order = (input.question('order your plate:-'));
            if (order == 1) {
                console.log('1.Half plate:-50$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 50) {
                    console.log("~Thank you~");
                } else if (pay > 50) {
                    let extra = pay - 50;
                    console.log("return extra money~" + extra);
                } else if (pay < 50) {
                    let less = 50 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            } if (order == 2) {
                console.log('2.Full plate:-100$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 100) {
                    console.log("~Thank you~");
                } else if (pay > 100) {
                    let extra = pay - 100;
                    console.log("return extra money~" + extra);
                } else if (pay < 100) {
                    let less = 100 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks a lot for treat sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
               
                }    
            
            }                    
       
        }        
    
    }else if (time == 2) {
        console.log('1.Sandwich \n2.Noodles');
        let dish = (input.question("Enter your dise :- "));
        if (dish == 1) {
            console.log("Sanwich");
            console.log("1.Half plate:- 150$ \n2. Full plate:-300$");
            let order = (input.question('order your plate:-'));
            if (order == 1) {
                console.log('1.Half plate:-150$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 150) {
                    console.log("~Thank you~");
                } else if (pay > 150) {
                    let extra = pay - 150;
                    console.log("return extra money~" + extra);
                } else if (pay < 150) {
                    let less = 150 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            } if (order == 2) {
                console.log('2.Full plate:-300$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 300) {
                    console.log("~Thank you~");
                } else if (pay > 300) {
                    let extra = pay - 300;
                    console.log("return extra money~" + extra);
                } else if (pay < 300) {
                    let less = 300 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks a lot for treat sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            }
        } else if (dish == 2) {
            console.log("Noodles");
            console.log("1.Half plate:- 150$ \n2. Full plate:-300$");
            let order = (input.question('order your plate:-'));
            if (order == 1) {
                console.log('1.Half plate:-150$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 150) {
                    console.log("~Thank you~");
                } else if (pay > 150) {
                    let extra = pay - 150;
                    console.log("return extra money~" + extra);
                } else if (pay < 150) {
                    let less = 150 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            } if (order == 2) {
                console.log('2.Full plate:-300$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 300) {
                    console.log("~Thank you~");
                } else if (pay > 300) {
                    let extra = pay - 300;
                    console.log("return extra money~" + extra);
                } else if (pay < 300) {
                    let less = 300 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks a lot for treat sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
               
                }    
            
            }                    
       
        }        
    
    } else if (time == 3) {
        console.log('1.Grilled vegetables \n2.Dal tadka with rice');
        let dish = (input.question("Enter your dise :- "));
        if (dish == 1) {
            console.log("Grilled vegetables");
            console.log("1.Half plate:- 250$ \n2. Full plate:-500$");
            let order = (input.question('order your plate:-'));
            if (order == 1) {
                console.log('1.Half plate:-250$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 250) {
                    console.log("~Thank you~");
                } else if (pay > 250) {
                    let extra = pay - 250;
                    console.log("return extra money~" + extra);
                } else if (pay < 250) {
                    let less = 250 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            } if (order == 2) {
                console.log('2.Full plate:-500$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 500) {
                    console.log("~Thank you~");
                } else if (pay > 500) {
                    let extra = pay - 500;
                    console.log("return extra money~" + extra);
                } else if (pay < 500) {
                    let less = 500 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks a lot for treat sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            }
        } else if (dish == 2) {
            console.log("Dal tadka with rice");
            console.log("1.Half plate:- 250$ \n2. Full plate:-500$");
            let order = (input.question('order your plate:-'));
            if (order == 1) {
                console.log('1.Half plate:-250$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 250) {
                    console.log("~Thank you~");
                } else if (pay > 250) {
                    let extra = pay - 250;
                    console.log("return extra money~" + extra);
                } else if (pay < 250) {
                    let less = 250 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
                }
            } if (order == 2) {
                console.log('2.Full plate:-500$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 500) {
                    console.log("~Thank you~");
                } else if (pay > 500) {
                    let extra = pay - 500;
                    console.log("return extra money~" + extra);
                } else if (pay < 500) {
                    let less = 500 - pay;
                    console.log("give us more money~" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:- "));
                    if (pay_again == less) {
                        console.log("~Thank You~")
                    } else if (less < pay_again) {
                        let extra = pay_again - less;
                        console.log("thanks a lot for treat sir~" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("YOUR ORDER HAS CANCELED-" + Return);
                    }
               
                }    
            
            }                    
       
        }        
    
    }

}