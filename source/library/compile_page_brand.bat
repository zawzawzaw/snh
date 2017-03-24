java -jar "compiler.jar" ^
  --js=..\js\manic\**.js ^
  --js=..\js\sagewest\**.js ^
  --js=closure-library\**.js ^
  --only_closure_dependencies ^
  --compilation_level WHITESPACE_ONLY ^
  --closure_entry_point=sagewest.page.Brand ^
  --externs=closure-externs\jquery-1.9.js ^
  --externs=closure-externs\html5.js ^
  --externs=closure-externs\window.js ^
  --externs=closure-externs\gsap.js ^
  --externs=closure-externs\all.js ^
  --externs=closure-externs\jquery_plugins.js ^
  --externs=closure-externs\scrollmagic.js ^
  --externs=closure-externs\new_fullpage.js ^
  --externs=closure-externs\others.js ^
  --create_source_map=page-brand.min.map ^
  --source_map_format=V3 ^
  --js_output_file=..\..\bin\js\page-brand.min.js