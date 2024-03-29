import React from "react";

const Background = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        height: "100%",
        width: "100%",
        zIndex: 100,
      }}
    >
      <div
        style={{
          margin: "5%",
          // marginTop: "2.5%",
          position: "absolute",
          width: "86%",
          height: "80%",
          zIndex: 100,
          backgroundColor: "rgba(255, 255, 255, 0.35)",
          padding: "2%",
          paddingTop: "0%",
          borderRadius: "1rem",
          overflow: "auto",
        }}
      >
        <h1>Background On Chromesthesia</h1>
        <h2>General Information</h2>
        <p>
          Synesthesia describes a rare neurological phenomenon in which a
          specific stimulus, which may be sensory, like a sound or flavor, or
          cognitive, such as a word or number, arouses a non-externally
          stimulated sensation. For instance, in a person with grapheme-colour
          synesthesia, seeing the letter <b style={{ color: "red" }}>A</b> may
          always evoke the color red, so that they always see the letter{" "}
          <b style={{ color: "red" }}>A</b> in red regardless of its actual
          printed color. The inducing stimulus is aptly called the inductor, and
          the resulting synesthetic sensation is termed the concurrent.
        </p>
        <p>
          A type of synesthesia in which which a nonvisual stimulus causes the
          individual to perceive color. Color hearing is a form of
          chromesthesia. In color hearing a musical tone elicits a color. One
          well-studied case involved an art teacher who had a range of
          consistent linkages between tone and color. For her, high octaves
          tended to evoke a lighter color value, while lower octaves evoked a
          darker color value. And rapid major chord tone sequences elicited
          rapid flashes of colors, "somewhat like fireworks exploding."
        </p>
        <h2>Types of Synesthetes</h2>
        <h4>Higher vs. Lower Synesthetes</h4>
        <p>
          The distinction between higher and lower synaesthetes was first
          proposed by Ramachandran and Hubbard in 2001, based on evidence of
          cross-activation mechanisms operating at different times and in
          different locations in the brain. <b>Lower synesthetes</b> process the
          inducing information and generate the concurrent at an early stage in
          cortical processing, specifically in the fusiform areas that deal with
          form and colour perception. In contrast, so-called{" "}
          <b>higher synesthetes</b> utilize later areas that manage the
          conceptual aspects of color.
        </p>
        <h4>Associator and Projector Synesthetes</h4>
        <p>
          For <b>associator synesthetes,</b> the synesthetic effects occurring
          concurrent to the stimulus occurs within “their mind’s eye,"" so to
          speak, meaning that it is internally-perceived by the synesthete.
          <b> Projector synesthetes</b> experience the concurrent outside of
          their mind as a physical sensation. In other words, they “project” the
          concurrent into external space, hence the name.
        </p>
        <p>
          It was thought for some time that because projector synesthetes
          physically experienced the concurrent, this meant they processed
          information at a lower stage involved in the physical elements of a
          stimulus, automatically making them lower synesthetes. Along the same
          vein, associator synesthetes mentally experience the concurrent, so
          they must process information at a higher stage of cortical processing
          involving the conceptual aspects of a stimulus, making them higher
          synesthetes. However, this pairing of projector with lower and
          associator with higher has not been supported by research. The crucial
          distinction between associators and projectors lies in the experience
          of the concurrent, while that between higher and lower synaesthetes is
          in the nature of the inducer. In fact, some studies have shown that
          these two dimensions of synesthesia are orthogonal to one another,
          meaning that you could have any combination of projector-lower,
          projector-higher, associator-lower, or associator-higher.
        </p>
        <h2>Theories on Synesthesia Causes</h2>
        <b>Is it Genetic?</b>
        <p>
          It is still not fully understood, but it is thought to be genetic and
          occurs more in women than men.
        </p>
        <b>Disinhibited Feedback Theory</b>
        <p>
          According to the disinhibited feedback theory, synesthesia is caused
          by feedback signals sent from higher-order associative regions to
          primary sensory regions not originally activated by the inducing
          stimulus. An example would be the activation of color area V4 via
          feedback from associative parietal cortex after stimulation of the
          grapheme area (but not color areas) by a black grapheme. This is the
          most popular theory.
        </p>
        <b>Cross Activation Feedback Theory</b>
        <p>
          The cross-activation theory differs from the disinhibited feedback
          theory in proposing that activity in the brain regions that are
          processing the inducing stimulus, directly results in additional
          activity in brain regions responsible for mediating the concurrent
          experience. No intermediate, higher-order processing step is included
          and instead aberrant anatomical connections between the regions
          processing the inducing and concurrent stimuli are proposed. The lack
          of an intermediate processing step implies that parietal cortex is not
          crucial for synesthetic experience.
        </p>
        <b>Reentrant Feedback Theory</b>
        <p>
          A similar proposal to the cross-activation model is the re-entrant
          processing model. In addition to “cross-talk” between relevant brain
          areas (e.g., areas processing form and color), this proposal includes
          feedback from higher-level areas (such as the anterior inferior
          temporal lobe) that represent the concept or meaning of the inducer.
        </p>
        <h2>Battery Testing for Synesthesia</h2>
        <p>
          Only recently has a more standardized battery of tests for synesthesia
          been developed, and these are only for the most common types--
          grapheme-colour, or associating letters and numbers with color; and
          sound-color or chromesthesia, when a musical stimulus such as a tone
          elicits a color sensation. Most of these tests present the letter or
          tone stimulus and have participants use a color wheel to describe the
          evoked sensation, and then the reflex speed and consistency of the
          responses over multiple tests is examined. The idea behind testing the
          speed of the response is that if the evoked sensation is truly
          involuntary, the participant will be quicker at selecting a color than
          if they needed to actually think and consciously make the association.
        </p>
        <h2>Citations</h2>
        <p>
          Eagleman, D. M., Kagan, A. D., Nelson, S. S., Sagaram, D., &amp;
          Sarma, A. K. (2007). A standardized test battery for the study of
          synesthesia. Journal of Neuroscience Methods, 159(1), 139-145.
          doi:10.1016/j.jneumeth.2006.07.012
        </p>
        <p>
          Ione, A., &amp; Tyler, C. (2004). Neuroscience, history and the ARTS
          Synesthesia: Is F-SHARP COLORED VIOLET? Journal of the History of the
          Neurosciences, 13(1), 58-65. doi:10.1080/09647040490885493
        </p>
        <p>
          Leeuwen, Tessa M. van, et al. “The Merit of Synesthesia for
          Consciousness Research.” Frontiers in Psychology, vol. 6, 2015.
          Crossref, doi:10.3389/fpsyg.2015.01850.
        </p>
        <p>
          Mroczko-WÄ…sowicz, A., &amp; NikoliÄ‡, D. (2014). Semantic mechanisms
          may be responsible for developing synesthesia. Frontiers in Human
          Neuroscience, 8. doi:10.3389/fnhum.2014.00509
        </p>
        <p>
          Ramachandran, V. S., & Hubbard, E. M. (2001). Synaesthesia--a window
          into perception, thought and language. Journal of Consciousness
          Studies, 8(12), 3–34.
        </p>
        <p>
          Sacks, O. W. (2007). Tales of music and the brain. London: Picador.
        </p>
        <p>
          Simner, J. (2013). Why are there different types of synesthete?
          Frontiers in Psychology, 4. doi:10.3389/fpsyg.2013.00558
        </p>
      </div>
    </div>
  );
};

export default Background;
