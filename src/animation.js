// Centralized animation props for framer motion.
const animation = {
	initial: {
		opacity: 0,
		y: '-5%',
	},
	animate: {
		opacity: 1,
		transition: { delay: 0.2 },
		y: 0,
	},
	exit: {
		opacity: 0,
	},
};
export default animation;
