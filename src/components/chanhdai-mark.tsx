export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="2 3 9 4">
	<path d="M 6 4 L 6 3 L 5 3 L 5 4 Z L 6 6 L 5 6 L 5 7 L 5 6 L 4 6 L 3 6 L 3 5 L 2 5 L 2 6 L 3 6 L 3 7 L 4 7 L 5 7 L 5 5 L 5 4 Z L 10 3 L 11 3 L 11 4 L 11 5 L 11 6 L 10 6 L 10 7 L 9 7 L 8 7 L 8 6 L 8 5 L 7 5 L 7 6 L 9 6 L 10 6 L 10 4 L 10 4 L 10 4 L 10 3" fill="currentColor"/>
</svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="2 3 9 4">
	<path fill=${color} d="M 6 4 L 6 3 L 5 3 L 5 4 Z L 6 6 L 5 6 L 5 7 L 5 6 L 4 6 L 3 6 L 3 5 L 2 5 L 2 6 L 3 6 L 3 7 L 4 7 L 5 7 L 5 5 L 5 4 Z L 10 3 L 11 3 L 11 4 L 11 5 L 11 6 L 10 6 L 10 7 L 9 7 L 8 7 L 8 6 L 8 5 L 7 5 L 7 6 L 9 6 L 10 6 L 10 4 L 10 4 L 10 4 L 10 3"/>
</svg>`;
}
