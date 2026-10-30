import PropTypes from "prop-types";

import { Button as FlowbiteButton, Spinner } from "flowbite-react";

const Button = ({ children, loading = false, disabled = false }) => {
  return (
    <FlowbiteButton
      className={``}
      type="button"
      disabled={disabled || loading}
      color="info"
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 bg-gray-400 rounded-md">
          <Spinner size="sm" light={true} />
        </div>
      )}
      <span className={loading ? "invisible" : "visible flex items-center"}>
        {children}
      </span>
    </FlowbiteButton>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Button;
