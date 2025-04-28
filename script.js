(function ($) {
    "use strict";
    // console.clear();

    let device_width = window.innerWidth;
    gsap.registerPlugin(ScrollTrigger);

    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Nokia|Opera Mini/i.test(navigator.userAgent) ? true : false;

    var gsapAnimation = {
        /* gsapAnimation init */
        init() {
            gsapAnimation.animation();
            // gsapAnimation.textAnimation();
        },

        animation() {
            /** Fade Left */
            let fade_left = gsap.utils.toArray(".fade_left");
            gsap.set(fade_left, {
                opacity: 0,
                x: -100,
            });

            if (fade_left) {
                fade_left.forEach((element, i) => {
                    gsap.to(element, {
                        opacity: 1,
                        x: 0,
                        ease: "power2.out",
                        duration: 1.5,
                        delay: i * 0.3,
                        scrollTrigger: {
                            trigger: element,
                            start: "top center+=150",
                            toggleActions: "play none none none",
                            markers: false,
                            once: true
                        }
                    });
                });
            }

            /** Fade right */
            let fade_right = gsap.utils.toArray(".fade_right");
            gsap.set(fade_right, {
                opacity: 0,
                x: 100,
            });

            if (fade_right) {
                fade_right.forEach((element, i) => {
                    gsap.to(element, {
                        opacity: 1,
                        x: 0,
                        ease: "power2.out",
                        duration: 1.5,
                        delay: i * 0.3,
                        scrollTrigger: {
                            trigger: element,
                            start: "top center+=150",
                            toggleActions: "play none none none",
                            markers: false,
                            once: true
                        },
                    });
                });
            }

            /** Fade up */
            let fade_bottom = gsap.utils.toArray(".fade_bottom");
            if (fade_bottom.length) {
                gsap.set(fade_bottom, { opacity: 0, y: 100 });

                fade_bottom.forEach((element, i) => {
                    gsap.to(element, {
                        opacity: 1,
                        y: 0,
                        ease: "sine",
                        duration: 1.5,
                        delay: i * 0.3,
                        scrollTrigger: {
                            trigger: element,
                            start: "top bottom",
                            toggleActions: "play none none none",
                            markers: false,
                            once: true
                        },
                    });
                });
            }
        },
    };
    function textAnimation(element) {
        //effect1
        $(".text-split").each(function () {
            $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='2_text'>$&</span>"));
        });
        var textSplit = $(".text-split span"),
            textSplit_1 = new TimelineMax({ repeat: 0 });
            textSplit_1.staggerFrom(
                textSplit,
                0.5,
                {
                    top: "+=25px",
                    rotation: "-=-3deg",
                    alpha: 0,
                    scale: 0.8,
                    ease: Power1.easeOut,
                },
                0.08
            ).to(
                textSplit, 
                0.5,
                {
                    alpha: 1, 
                    ease: Power1.easeOut 
                },
                "+=1.0"
            );

        //effect3
        $(".text-timeline").each(function () {
            $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='_timeline'>$&</span>"));
        });
        var textTimeline = $(".text-timeline span"),
            textTimeline_2 = new TimelineMax({ repeat: 0 });
            textTimeline_2.staggerFrom(
                textTimeline,
                0.5,
                {
                    y: 50, 
                    z: 0, 
                    ease: Elastic.easeOut.config(1, 0.7) 
                },
                0.08
            ).to(
                textTimeline, 
                0.5, 
                { 
                    alpha: 1, 
                    ease: Power1.easeOut 
                }, 
                "+=1.0"
            );

        //effect5
        $(".text-fly").each(function () {
            $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='_fly'>$&</span>"));
        });
        var textFly = $(".text-fly span"),
            textFly_3 = new TimelineMax({ repeat: 0 });
            textFly_3.staggerFrom(
                textFly,
                0.5,
                { 
                    alpha: 0, 
                    x: 40, 
                    ease: Power1.easeOut 
                },
                0.1,
                "+=1.0"
            ).staggerTo(
                textFly,
                0.5,
                {
                    alpha: 1, 
                    x: 0, 
                    ease: Power1.easeOut 
                },
                0.1,
                "+=1.0"
            );
    }

    // Set up Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                textAnimation();
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 1
    });
    document.querySelectorAll('.text-fly').forEach(element => {
        observer.observe(element);
    });

    $(document).ready(function () {
        gsapAnimation.init();
    });

})(jQuery);
