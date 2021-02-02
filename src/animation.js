// Centralized animation props for framer motion.
const style1 = { opacity: 0, y: 0 },
	style2 = { opacity: 1 },
	style3 = { opacity: 0, y: '-100%' };
const initial = { ...style1 },
	animate = { ...style2 },
	exit = { ...style3 };

const animation = { initial, animate, exit };
export default animation;
