
import {useCallback} from "react";
import type {Container, Engine} from "tsparticles-engine";
import Particles from "react-particles";
import {loadSlim} from "tsparticles-slim";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import s from "./style.module.css"


export const Particle = () => {
  const color = document.documentElement.getAttribute('data-theme') === 'dark' ? '#2d2f3b' : '#cdccdd'
  const colorBg = document.documentElement.getAttribute('data-theme') === 'dark' ? '#8a8686' : '#424246'
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {

    await console.log(container);
  }, []);
  return (
      <Particles  className={s.bg}
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
                color: {
                    value: colorBg,
                },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                /* onClick: {
                     enable: true,
                     mode: "push",
                 },*/
                onHover: {
                  enable: true,
                  mode: "trail",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 10,
                },
                repulse: {
                  distance: 50,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: color,
              },
              links: {
                color: "#ffffff",
                distance: 100,
                enable: false,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: true,
                speed: 2,
                straight: true,
              },
              number: {
                density: {
                  enable: true,
                  area: 900,
                },
                value: 80,
              },
              opacity: {
                value: 1,
              },
              shape: {
                type: "circle",
                /*images: [
                    {
                        src: logo,

                    },
                    {
                        src: logo2,

                    }
                ]*/
              },
              size: {
                value: { min: 2, max: 6 },
              },
            },
            detectRetina: true,
          }}
      />
  );
};