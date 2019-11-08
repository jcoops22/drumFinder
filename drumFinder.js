let vm = new Vue({
  el: "#app",
  data: {
    order: 0,
    nomorequestions: false,
    getStarted: false,
    class: "img1",
    drumTable: [
      { brand: "ddrum", points: 0 },
      { brand: "dw", points: 0 },
      { brand: "gretch", points: 0 },
      { brand: "ocdrum", points: 0 },
      { brand: "pearl", points: 0 },
      { brand: "sonar", points: 0 },
      { brand: "sjc", points: 0 }
    ],
    questions: [
      {
        q: "What kind of music do you like to play?",
        a: ["rock", "country", "r & b", "jazz", "hip hop", "punk", "hardcore"],
        p: [
          {
            point: function() {
              vm.drumTable[0].points += 2;
              vm.drumTable[1].points += 3;
              vm.drumTable[3].points += 2;
              vm.drumTable[6].points += 2;
            }
          },
          {
            point: function() {
              vm.drumTable[2].points += 1;
              vm.drumTable[4].points += 3;
              vm.drumTable[5].points += 2;
            }
          },
          {
            point: function() {
              vm.drumTable[1].points += 3;
              vm.drumTable[5].points += 2;
            }
          },
          {
            point: function() {
              vm.drumTable[2].points += 3;
              vm.drumTable[4].points += 2;
              vm.drumTable[5].points += 3;
            }
          },
          {
            point: function() {
              vm.drumTable[0].points += 1;
              vm.drumTable[1].points += 3;
              vm.drumTable[5].points += 2;
            }
          },
          {
            point: function() {
              vm.drumTable[0].points += 3;
              vm.drumTable[3].points += 2;
              vm.drumTable[6].points += 2;
            }
          },
          {
            point: function() {
              vm.drumTable[0].points += 3;
              vm.drumTable[1].points += 1;
              vm.drumTable[3].points += 3;
            }
          }
        ]
      },
      {
        q: "Do you like a lot of toms?",
        a: ["yes", "no"],
        p: [
          {
            point: function() {
              vm.drumTable[0].points += 4;
            }
          },
          {
            point: function() {
              vm.drumTable[1].points += 4;
            }
          }
        ]
      },
      {
        q: "Do you need a lot of space to play?",
        a: ["yes", "no"],
        p: [
          {
            point: function() {
              vm.drumTable[0].points += 2;
              vm.drumTable[1].points += 2;
              vm.drumTable[2].points += 2;
              vm.drumTable[4].points += 2;
              vm.drumTable[6].points += 2;
            }
          },
          {
            point: function() {
              vm.drumTable[3].points += 2;
              vm.drumTable[5].points += 2;
            }
          }
        ]
      }
    ],

    gretch: [
      "resources/gretch/g1.jpg",
      "resources/gretch/g2.jpg",
      "resources/gretch/g3.jpg",
      "resources/gretch/g4.jpg",
      "resources/gretch/g5.jpg",
      "resources/gretch/g6.png",
      "resources/gretch/g7.jpg",
      "resources/gretch/g8.jpg"
    ],
    ddrum: [
      "resources/ddrum/dd1.jpg",
      "resources/ddrum/dd2.jpg",
      "resources/ddrum/dd3.jpg",
      "resources/ddrum/dd4.jpg",
      "resources/ddrum/dd5.jpg",
      "resources/ddrum/dd6.jpg",
      "resources/ddrum/dd7.jpeg",
      "resources/ddrum/dd8.jpg",
      "resources/ddrum/dd9.jpg",
      "resources/ddrum/dd10.jpg"
    ],
    dw: [
      "resources/dw/dw1.jpg",
      "resources/dw/dw2.jpg",
      "resources/dw/dw3.jpg",
      "resources/dw/dw4.jpg",
      "resources/dw/dw5.jpg",
      "resources/dw/dw6.jpg",
      "resources/dw/dw7.jpg",
      "resources/dw/dw8.png",
      "resources/dw/dw9.jpg",
      "resources/dw/dw10.jpg",
      "resources/dw/dw11.jpg"
    ],
    ocdrum: [
      "resources/ocdrum/oc1.jpg",
      "resources/ocdrum/oc2.jpg",
      "resources/ocdrum/oc3.jpg",
      "resources/ocdrum/oc4.png",
      "resources/ocdrum/oc5.jpg",
      "resources/ocdrum/oc6.jpg",
      "resources/ocdrum/oc7.jpg"
    ],
    sjc: [
      "resources/sjc/sjc1.jpg",
      "resources/sjc/sjc2.jpg",
      "resources/sjc/sjc3.jpg",
      "resources/sjc/sjc4.png",
      "resources/sjc/sjc5.jpg",
      "resources/sjc/sjc6.jpg",
      "resources/sjc/sjc7.jpg"
    ],
    sonar: [
      "resources/sonar/sd1.jpg",
      "resources/sonar/sd2.jpg",
      "resources/sonar/sd3.jpg",
      "resources/sonar/sd4.jpg",
      "resources/sonar/sd5.jpg",
      "resources/sonar/sd6.jpg",
      "resources/sonar/sd7.jpg",
      "resources/sonar/sd8.png",
      "resources/sonar/sd9.webp",
      "resources/sonar/sd10.jpg",
      "resources/sonar/sd11.jpg"
    ],
    pearl: [
      "resources/pearl/pd1.jpg",
      "resources/pearl/pd2.jpg",
      "resources/pearl/pd3.jpg",
      "resources/pearl/pd4.jpg",
      "resources/pearl/pd5.jpeg",
      "resources/pearl/pd6.jpg",
      "resources/pearl/pd7.jpg",
      "resources/pearl/pd8.jpeg",
      "resources/pearl/pd9.jpg",
      "resources/pearl/pd10.jpeg",
      "resources/pearl/pd11.jpeg",
      "resources/pearl/pd12.jpg"
    ]
  },
  computed: {
    brand() {
      return this.ddrum;
    },
    loadedArr() {
      let combo = this.gretch.concat(
        this.ddrum,
        this.dw,
        this.ocdrum,
        this.sjc,
        this.sonar,
        this.pearl,
        this.ddrum,
        this.dw
      );

      return this.shuffle(combo);
    }
  },
  methods: {
    fade() {
      let imgages = document.getElementsByTagName("img");
      let img = new Set(imgages);

      leavingUp.play();
      loader.reverse();
      questionsIn.reverse();

      img.forEach(image => {
        image.style.animationName = null;
      });
      setTimeout(() => {
        leavingUp.reverse();
        loader.play();
        questionsIn.play();
      }, 3000);
    },
    nextQuestion() {
      setTimeout(() => {
        if ((this.nomorequestions = false)) {
          console.log("im next");
          if (this.order < this.questions.length - 1) {
            this.order++;
          }
        }
      }, 2000);
    },
    // Fisher-Yates shuffle
    shuffle(array) {
      let counter = array.length;

      // While there are elements in the array
      while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
      }
      return array;
    },
    loadArr() {
      let combo = this.gretch.concat(this.ddrum);

      this.loadedArr = this.shuffle(combo);
    },
    getAns(arr) {
      let value = event.target.innerText;

      if (value) {
        let ind = arr[this.order].a.indexOf(value);
        arr[this.order].p[ind].point();
      }
    },
    tally() {
      let tally = this.drumTable.map(brand => {
        console.log(brand.brand, brand.points);
        // return { Name: brand.brand, points: brand.points };
        return brand.points;
      });
      let most = tally.reduce((acc, nxt) => {
        return acc > nxt ? acc : nxt;
      });
    },
    anyQ() {
      if (this.nomorequestions) {
        console.log("no more questions at this time");
      }
    },
    reset() {
      this.drumTable.forEach(brand => {
        brand.points = 0;
        this.order = 0;
      });
    }
  }
});

// reg js

// create parallax effect
const wrap = document.querySelector(".infoWrap");
window.addEventListener("scroll", () => {
  let offset = window.pageYOffset;
  wrap.style.backgroundPositionY = offset * 0.2 + "px";
});

// Timelines
var hover = new TimelineMax({ paused: true });
var leaving = new TimelineMax({ paused: true });
var leavingUp = new TimelineMax({ paused: true });
var loader = new TimelineMax({ paused: false });
var questionsIn = new TimelineMax({ paused: false });
var questionsOut = new TimelineMax({ paused: true });
const underline = new TimelineMax({ paused: false });

// leaving
leaving.to(".img1", 0.4, {
  x: "-130px",
  opacity: "0",
  ease: Power1.easeIn
});
leaving.to(".img2", 0.7, {
  x: "-130px",
  opacity: "0",
  ease: Power3.easeIn
});
leavingUp.to(".img3", 0.8, {
  y: "-430px",
  opacity: "0",
  ease: Power1.easeOut
});
leavingUp.to(".img4", 0.3, {
  y: "-230px",
  opacity: "0",
  ease: Power4.easeIn
});
leavingUp.to(".img5", 0.2, {
  y: "-330px",
  opacity: "0",
  ease: Power4.easeIn
});

// loading everything
loader.from(".img1", 0.6, {
  x: "400px",
  opacity: "0",
  ease: Power1.easeOut
});
loader.from(".img2", 0.2, {
  x: "400px",
  opacity: "0",
  ease: Power1.easeOut
});
loader.from(".img3", 0.3, {
  x: "400px",
  opacity: "0",
  ease: Power1.easeOut
});
loader.from(".img4", 0.2, {
  x: "400px",
  opacity: "0",
  ease: Power1.easeOut
});
loader.from(".img5", 0.5, {
  x: "400px",
  opacity: "0",
  ease: Power1.easeOut
});

// hover
hover.to(".img1", 0.5, {
  scale: "1.4"
});

// questions box
questionsIn.from(".questions", 0.6, {
  x: "1000px",
  opacity: "0",
  ease: Power2.easeOut
});

questionsOut.to(".questions", 0.6, {
  x: "1000px",
  opacity: "0",
  ease: Power2.easeIn
});
underline.to(".underline", 0.8, {
  width: "30vw"
});

// scroll magic

// controllers
// const controllerGameStart = new ScrollMagic.Controller();
// const controlleri = new ScrollMagic.Controller();
// const controllerParallax = new ScrollMagic.Controller();

// tweens
const tweeni = TweenMax.to(".header", 0.5, {
  backgroundColor: "black",
  color: "white",
  height: "10vh",
  fontSize: "20px"
});
const tweenGameStart = TweenMax.to("#getStartedDiv", 0.3, {
  x: "40vw",
  y: "60vh",
  width: "80px",
  height: "80px",
  borderRadius: "50%"
});

// scenes
const scenei = new ScrollMagic.Scene({
  triggerElement: "#notStartedWrap",
  triggerHook: "onCenter",
  offset: 250,
  // duration: 100,
  reverse: true
})
  .on("progress", event => {
    let ungrey = document.getElementById("notStartedWrap");
    let body = document.getElementsByTagName("div");

    if (event.progress === 1) {
      vm.getStarted = true;
      ungrey.style.opacity = 0;
      body[0].style.overflow = "hidden";
      vm.reset();
    } else {
      vm.getStarted = false;
      ungrey.style.opacity = 0.6;
    }
  })
  .setTween(tweeni);
// .addTo(controlleri);

const sceneGameStart = new ScrollMagic.Scene({
  triggerElement: "#notStartedWrap",
  triggerHook: "onCenter",
  offset: 250,
  reverse: true
}).setTween(tweenGameStart);
// .addTo(controllerGameStart);
