import React, { useEffect, useState } from 'react'

export default function Skills() {
  const [HtmlCss, setHtmlCss] = useState("0%");
  const [javscript, setJavascript] = useState("0%");
  const [nodeJs, setNodeJs] = useState("0%");
  const [react, setReact] = useState("0%");
  const [photoshop, setPhotoshop] = useState("0%");
  const [afterEffects, setAfterEffects] = useState("0%");


  useEffect(() => {
    setTimeout(() => {
      setHtmlCss("75%")
      setJavascript("80%")
      setNodeJs("75%")
      setReact("80%")
      setPhotoshop("80%")
      setAfterEffects("80%")
    }, 1000);
  }, [])

    return (
        <div>
              <section id="skills" class="skills section-bg">
      <div class="container">

        <div class="section-title">
          <h2>Skills</h2>
        </div>

        <div class="row skills-content">

          <div class="col-lg-6" data-aos="fade-up">

            <div class="progress">
              <span class="skill">HTML / CSS <i class="val">80%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" style={{width: HtmlCss, backgroundColor:"#dc3d4b"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">JavaScript <i class="val">80%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" style={{width: javscript, backgroundColor:"#dc3d4b"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">Node Js <i class="val">75%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" style={{width: nodeJs, backgroundColor:"#dc3d4b"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>


          </div>

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">

          <div class="progress">
              <span class="skill">React<i class="val">80%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" style={{width: react, backgroundColor:"#dc3d4b"}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">Photoshop <i class="val">80%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" style={{width: photoshop, backgroundColor:"#dc3d4b"}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">After Effects <i class="val">80%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" style={{width: afterEffects, backgroundColor:"#dc3d4b"}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
        </div>
    )
}
