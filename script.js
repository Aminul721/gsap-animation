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
            let fade_left = gsap.utils.toArray('[dataAnimation="fade left"]');
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
                        duration: 0.8,
                        delay: i * 0.2,
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
            let fade_right = gsap.utils.toArray('[dataAnimation="fade right"]');
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
                        duration: 0.8,
                        delay: i * 0.2,
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
            let fade_bottom = gsap.utils.toArray('[dataAnimation="fade up"]');
            if (fade_bottom.length) {
                gsap.set(fade_bottom, { opacity: 0, y: 100 });

                fade_bottom.forEach((element, i) => {
                    gsap.to(element, {
                        opacity: 1,
                        y: 0,
                        ease: "sine",
                        duration: 0.8,
                        delay: i * 0.2,
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

            /** zoom in image left */
            let zoomIn_imgLeft = gsap.utils.toArray('[dataAnimation="zoom in img"]');
            gsap.set(zoomIn_imgLeft, {
                opacity: 0,
                x: -100,
            });

            if (zoomIn_imgLeft) {
                zoomIn_imgLeft.forEach((element, i) => {
                    gsap.to(element, {
                        opacity: 1,
                        x: 0,
                        ease: "power2.out",
                        duration: 0.8,
                        delay: i * 0.2,
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

            let revealImgLeftOut = document.querySelectorAll('[dataAnimation="img zoom out left"]');
            if (revealImgLeftOut) {
                revealImgLeftOut.forEach((imgElem) => {
                    let image = imgElem.querySelector("img");
                    let timelineImg = gsap.timeline({
                        scrollTrigger: {
                            trigger: imgElem, 
                            toggleActions: "play none none none" 
                        } 
                    });
                    timelineImg.set(imgElem, {
                        autoAlpha: 1 
                    });
                    timelineImg.from(imgElem, 
                        1.5, 
                        { 
                            xPercent: -100, 
                            ease: Power2.out 
                        }
                    );
                    timelineImg.from(
                        image, 
                        1.5, 
                        { 
                            xPercent: 100, 
                            scale: 1.3, 
                            delay: -1.5, 
                            ease: Power2.out 
                        }
                    );
                });
            }

            let revealImgRightOut = document.querySelectorAll('[dataAnimation="img zoom out right"]');
            if (revealImgRightOut) {
                revealImgRightOut.forEach((imgElem) => {
                    let image = imgElem.querySelector("img");
                    let timelineImg = gsap.timeline({
                        scrollTrigger: {
                            trigger: imgElem, 
                            toggleActions: "play none none none" 
                        } 
                    });
                    timelineImg.set(imgElem, {
                        autoAlpha: 1 
                    });
                    timelineImg.from(imgElem, 
                        1.5, 
                        { 
                            xPercent: 100, 
                            ease: Power2.out 
                        }
                    );
                    timelineImg.from(
                        image, 
                        1.5, 
                        { 
                            xPercent: -100, 
                            scale: 1.3, 
                            delay: -1.5, 
                            ease: Power2.out 
                        }
                    );
                });
            }

            let revealImgLeftIn = document.querySelectorAll('[dataAnimation="img zoom in left"]');
            if (revealImgLeftIn) {
                revealImgLeftIn.forEach((imgElem) => {
                    let image = imgElem.querySelector("img");
                    let timelineImg = gsap.timeline({
                        scrollTrigger: {
                            trigger: imgElem,
                            toggleActions: "play none none none"
                        }
                    });
                    timelineImg.set(imgElem, {
                        autoAlpha: 1,
                    });
                    timelineImg.from(imgElem, 1.5, {
                        xPercent: -100, 
                        ease: Power2.out,
                        scale: 0.5,
                    });
                    timelineImg.from(image, 1.5, {
                        xPercent: 100, 
                        scale: 1, 
                        delay: -1.5, 
                        ease: Power2.out 
                    });
                });
            }

            let revealImgRightIn = document.querySelectorAll('[dataAnimation="img zoom in right"]');
            if (revealImgRightIn) {
                revealImgRightIn.forEach((imgElem) => {
                    let image = imgElem.querySelector("img");
                    let timelineImg = gsap.timeline({
                        scrollTrigger: {
                            trigger: imgElem,
                            toggleActions: "play none none none"
                        }
                    });
                    timelineImg.set(imgElem, {
                        autoAlpha: 1,
                    });
                    timelineImg.from(imgElem, 1.5, {
                        xPercent: 100, 
                        ease: Power2.out,
                        scale: 0.5,
                    });
                    timelineImg.from(image, 1.5, {
                        xPercent: -100, 
                        scale: 1, 
                        delay: -1.5, 
                        ease: Power2.out 
                    });
                });
            }

        },
    };
    function textAnimation(element) {
        //split
        $('[textAnimation="split"]').each(function () {
            $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='2_text'>$&</span>"));
        });
        var textSplit = $('[textAnimation="split"] span'),
            textSplit_1 = new TimelineMax({ repeat: 0 });
            textSplit_1.staggerFrom(
                textSplit,
                0.5,
                {
                    // top: "+=25px",
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

        //timeline
        $('[textAnimation="timeline"]').each(function () {
            $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='_timeline'>$&</span>"));
        });
        var textTimeline = $('[textAnimation="timeline"] span'),
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

        //fly
        $('[textAnimation="fly"]').each(function () {
            $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='_fly'>$&</span>"));
        });
        var textFly = $('[textAnimation="fly"] span'),
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
