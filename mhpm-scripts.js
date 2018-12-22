((EasyXHR) => {
  return {
    run(url) {
      let scriptCode = EasyXHR.getSync(url);
      eval(scriptCode);
    }
  };
})
