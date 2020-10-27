import React from "react";
import PropTypes from "prop-types";
import Typist from "react-typist";

const Subtitle = ({ onDone }) => (
  <Typist
    startDelay={500}
    avgTypingDelay={20}
    cursor={{ show: false }}
    className="my-2 flex lg:h-32"
    onTypingDone={onDone}
  >
    <code className="w-full text-sm leading-loose">
      <div>
        <span className="text-blue-600">const</span>{" "}
        <span className="text-orange-500">developer</span>:{" "}
        <span className="text-blue-600">=</span> {'{'}
      </div>
      <div className="lg:pl-8">
        <span className="text-red-500">Growth</span>:{" "}
        <span className="text-teal-400">Associating</span>{" "}+{" "}
        <span className="text-teal-400">Questioning</span>{" "}+{" "}
        <span className="text-teal-400">Observing</span>{" "}+{" "}
        <span className="text-teal-400">Experimenting</span>,
      </div>
      <div className="lg:pl-8">
        <span className="text-red-500">Success</span>:{" "}
        <span className="text-teal-400">Imagination</span>{" "}+{" "}
        <span className="text-teal-400">Creativity</span>{" "}+{" "}
        <span className="text-teal-400">Innovation</span>,
      </div>
      <div>{'}'};</div>
    </code>
  </Typist>
);

Subtitle.propTypes = {
  onDone: PropTypes.func.isRequired,
};

export default Subtitle;