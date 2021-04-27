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
          position: "absolute",
          width: "86%",
          height: "78%",
          zIndex: 100,
          backgroundColor: "rgba(255, 255, 255, 0.35)",
          padding: "2%",
          borderRadius: "1rem",
        }}
      >
        <h1>Background On Chromesthesia</h1>
        <h3>General Information</h3>
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
        <h3>Theories on Synesthesia Causes</h3>
        <p>Disinhibited Feedback Theory</p>
        <p>
          According to the disinhibited feedback theory, synesthesia is caused
          by feedback signals sent from higher-order associative regions to
          primary sensory regions not originally activated by the inducing
          stimulus. An example would be the activation of color area V4 via
          feedback from associative parietal cortex after stimulation of the
          grapheme area (but not color areas) by a black grapheme. This is the
          most popular theory.
        </p>
        <p>Cross Activation Feedback Theory</p>
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
        <p>Reentrant Feedback Theory</p>
        <p>
          A similar proposal to the cross-activation model is the re-entrant
          processing model. In addition to “cross-talk” between relevant brain
          areas (e.g., areas processing form and color), this proposal includes
          feedback from higher-level areas (such as the anterior inferior
          temporal lobe) that represent the concept or meaning of the inducer.
        </p>
        <h3>Battery Testing for Synesthesia</h3>
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
      </div>
    </div>
  );
};

export default Background;
