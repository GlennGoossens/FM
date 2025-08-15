export default function BreadcrumbComponent({ path }: { path: string }) {
    const paths = path.split("/").filter(path => path !== "");
    const pathWithoutLast = paths.slice(0, -1);
    const lastPath = paths[paths.length - 1];
    return (
        <section className="breadcrumbs">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center">
          <h2></h2>
          <ol>
            <li><a href="/">Home</a></li>
            {pathWithoutLast.map((path, index) => (
                <li key={index}>
                    <a href={`/${pathWithoutLast.slice(0, index + 1).join("/")}`}>{path.charAt(0).toUpperCase() + path.slice(1)}</a>
                    </li>
            ))}
            <li>{lastPath.charAt(0).toUpperCase() + lastPath.slice(1)}</li>
          </ol>
        </div>

      </div>
    </section>
    )
}