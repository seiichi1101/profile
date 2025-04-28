export default function Page() {
  const projects = [{ id: 1 }];
  return (
    <div>
      {projects.map((project) => (
        <div
          className="flex flex-col items-center justify-center mt-6 cursor-pointer"
          key={project.id}></div>
      ))}
    </div>
  );
}
