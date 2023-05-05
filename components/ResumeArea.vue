<template>
  <!-- Resume Area Start -->
  <section class="resume-area section-padding" id="resume">
    <div class="container">
      <!-- Start Section Title -->
      <div class="row mb-50">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>Resume</h2>
          </div>
        </div>
      </div>
      <!-- End Section Title -->
      <div class="row">
        <div class="col-lg-3 d-none d-lg-block">
          <ResumeNavComponent v-bind:infoNav="infoNav"></ResumeNavComponent>
          

          <!-- Start Resume Nav -->
          <!--
          <nav id="navi">
            <ul>
              <li><a href="#page-1">Education</a></li>
              <li><a href="#page-2">Experience</a></li>
              <li><a href="#page-3">Skills</a></li>
              <li><a href="#page-4">Awards</a></li>
            </ul>
          </nav> -->
          <!-- End Resume Nav -->
        </div>
        <div class="col-lg-9 col-md-12">
          <!-- Start Education -->
          <div id="page-1" class="page one">
            <h3 class="heading">Education</h3>
            <div class="resume-wrap transition d-flex">
              <div
                class="icon d-flex align-items-center justify-content-center"
              >
                <span class="icon-graduation"></span>
              </div>
              <div class="text pl-3">
                <span class="date">2016 - 2022</span>
                <h4>Software Development and Technology Engineering</h4>
                <span class="position">Autonomous University of Chiapas</span>
                <p>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs. The passage
                  is attributed to an unknown typesetter in the 15th century who
                  is thought to have.
                </p>
              </div>
            </div>
            <div class="resume-wrap transition d-flex">
              <div
                class="icon d-flex align-items-center justify-content-center"
              >
                <span class="icon-graduation"></span>
              </div>
              <div class="text pl-3">
                <span class="date">January 2020 - June 2020</span>
                <h4>Interchange Student</h4>
                <h4>Colombia</h4>
                <span class="position">University of Boyacá</span>
                <p>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs. The passage
                  is attributed to an unknown typesetter in the 15th century who
                  is thought to have.
                </p>
              </div>
            </div>
          </div>
          <!-- End Education -->

          <!-- Start Experience -->
          <div id="page-2" class="page two">
            <h3 class="heading">Experience</h3>
            <div class="resume-wrap transition d-flex">
              <div
                class="icon d-flex align-items-center justify-content-center"
              >
                <span class="icon-briefcase"></span>
              </div>
              <div class="text pl-3">
                <span class="date">Oct 2022 - Actuallity</span>
                <h4>Microservices Developer</h4>
                <span class="position">Grupo Salinas</span>
                <span class="position"> - Hybrid</span>
                <p>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs. The passage
                  is attributed to an unknown typesetter in the 15th century who
                  is thought to have.
                </p>
              </div>
            </div>
            <div class="resume-wrap transition d-flex">
              <div
                class="icon d-flex align-items-center justify-content-center"
              >
                <span class="icon-briefcase"></span>
              </div>
              <div class="text pl-3">
                <span class="date">Jul 2022 - Oct 2022</span>
                <h4>iOS Mobile Developer</h4>
                <span class="position">Gonet</span>
                <span class="position"> - Remote</span>
                <p>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs. The passage
                  is attributed to an unknown typesetter in the 15th century who
                  is thought to have.
                </p>
              </div>
            </div>

            <div class="resume-wrap transition d-flex">
              <div
                class="icon d-flex align-items-center justify-content-center"
              >
                <span class="icon-briefcase"></span>
              </div>
              <div class="text pl-3">
                <span class="date">Oct 2020 - Oct 2022</span>
                <h4>Fullstack developer / DBA </h4>
                <span class="position">Secretaría de Hacienda del Estado de Chiapas</span>
                <span class="position"> - On site</span>
                <p>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs. The passage
                  is attributed to an unknown typesetter in the 15th century who
                  is thought to have.
                </p>
              </div>
            </div>

            <div class="resume-wrap transition d-flex">
              <div
                class="icon d-flex align-items-center justify-content-center"
              >
                <span class="icon-briefcase"></span>
              </div>
              <div class="text pl-3">
                <span class="date">Jul 2020 - Oct 2020</span>
                <h4>Fullstack developer </h4>
                <span class="position">Global Transfer</span>
                <span class="position"> - On Site</span>
                <p>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs. The passage
                  is attributed to an unknown typesetter in the 15th century who
                  is thought to have.
                </p>
              </div>
            </div>

            <div class="resume-wrap transition d-flex">
              <div
                class="icon d-flex align-items-center justify-content-center"
              >
                <span class="icon-briefcase"></span>
              </div>
              <div class="text pl-3">
                <span class="date">Ago 2018 - Jan 2020</span>
                <h4>Fullstack developer Jr</h4>
                <span class="position">Induxsoft Data Services</span>
                <span class="position"> - On Site</span>
                <p>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs. The passage
                  is attributed to an unknown typesetter in the 15th century who
                  is thought to have.
                </p>
              </div>
            </div>
          </div>
          <!-- End Experience -->

          <!-- Start Skills -->
          <div id="page-3" class="page three">
            <h3 class="heading">Skills</h3>
            <div class="row">
              <div class="col-md-6">
                <div class="progress-wrap">
                  <h5>Photoshop</h5>
                  <div class="progress">
                    <div class="progress-bar" style="width:90%">
                      <span>90%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="progress-wrap">
                  <h5>jQuery</h5>
                  <div class="progress">
                    <div class="progress-bar" style="width:85%">
                      <span>85%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="progress-wrap">
                  <h5>HTML5</h5>
                  <div class="progress">
                    <div class="progress-bar" style="width:95%">
                      <span>95%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="progress-wrap">
                  <h5>CSS3</h5>
                  <div class="progress">
                    <div class="progress-bar" style="width:90%">
                      <span>90%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="progress-wrap">
                  <h5>WordPress</h5>
                  <div class="progress">
                    <div class="progress-bar" style="width:70%">
                      <span>70%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="progress-wrap">
                  <h5>SEO</h5>
                  <div class="progress">
                    <div class="progress-bar" style="width:80%">
                      <span>80%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Skills -->

          <!-- Start Awards -->
          <div id="page-4" class="page four">
            <h3 class="heading">Awards</h3>
            <div class="resume-wrap transition d-flex">
              <div
                class="icon d-flex align-items-center justify-content-center"
              >
                <span class="icon-badge"></span>
              </div>
              <div class="text pl-3">
                <span class="date">2014-2015</span>
                <h4>Top 10 Web Developer</h4>
                <span class="position">Mansoura University</span>
                <p>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs. The passage
                  is attributed to an unknown typesetter in the 15th century who
                  is thought to have.
                </p>
              </div>
            </div>
            <div class="resume-wrap transition d-flex">
              <div
                class="icon d-flex align-items-center justify-content-center"
              >
                <span class="icon-badge"></span>
              </div>
              <div class="text pl-3">
                <span class="date">2014-2015</span>
                <h4>Top 5 LeaderShip Exellence Winner</h4>
                <span class="position">Mansoura University</span>
                <p>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs. The passage
                  is attributed to an unknown typesetter in the 15th century who
                  is thought to have.
                </p>
              </div>
            </div>
            <div class="resume-wrap transition d-flex">
              <div
                class="icon d-flex align-items-center justify-content-center"
              >
                <span class="icon-badge"></span>
              </div>
              <div class="text pl-3">
                <span class="date">2014-2015</span>
                <h4>Top 4 Web Tester</h4>
                <span class="position">Mansoura University</span>
                <p>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs. The passage
                  is attributed to an unknown typesetter in the 15th century who
                  is thought to have.
                </p>
              </div>
            </div>
          </div>
          <!-- End Awards -->
        </div>
      </div>
    </div>
  </section>
  <!-- Resume Area End -->
</template>


<script>
import ResumeNavComponent from './global/ResumeNav.vue';

export default {
  name: "ResumeArea",
  components: {
    ResumeNavComponent
  },
  data() {
    return {
      infoNav:[
        { label: "Education", href: "#page-1" },
        { label: "Experience", href: "#page-2" },
        { label: "Skills", href: "#page-3" },
        { label: "Awards", href: "#page-4" },
      ]
    }
  }
};
</script>
