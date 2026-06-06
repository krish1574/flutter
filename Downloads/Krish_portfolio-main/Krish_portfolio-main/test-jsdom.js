import jsdom from 'jsdom';
const { JSDOM } = jsdom;

async function run() {
  console.log("Starting JSDOM instance tracking http://localhost:8080...");

  const virtualConsole = new jsdom.VirtualConsole();
  virtualConsole.sendTo(console);

  // Track unhandled exceptions
  virtualConsole.on("jsdomError", (error) => {
    console.error("JSDOM Error details:", error.message, error.stack);
  });

  try {
    const dom = await JSDOM.fromURL("http://localhost:8080/", {
      resources: "usable",
      runScripts: "dangerously",
      virtualConsole,
      pretendToBeVisual: true
    });

    console.log("Waiting 3 seconds for scripts to execute...");
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log("Done waiting. If no error printed above, there might not be any runtime exceptions on initial load.");
    process.exit(0);
  } catch (err) {
    console.error("Failed to load page in JSDOM:", err);
    process.exit(1);
  }
}

run();
