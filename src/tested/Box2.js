import React from 'react';
<Spinner.Render />  {/* Build spinner component */}
Spinner.show();     //Show spinner.

namespace Spinner {
'use strict';
export let show: any; //Ref to showIt method.
export let hide: any; //Ref to hideIt method.

export function Render() {
   const [visible, setVisible] = React.useState(false); //Set refresh method.

   function showIt() {
      setVisible(true);  //Show spinner.
   }
   function hideIt() {
      setVisible(false); //Hide spinner.
   }

   const showRef: any = React.useRef(showIt);
   const hideRef: any = React.useRef(hideIt);

   //Component did mount.
   React.useEffect(() => {
      Spinner.show = showRef.current;
      Spinner.hide = hideRef.current;
   }, []);

   const styles: any = createStyles({
      row1Container: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
   });

   return (
      <div>
         {visible && <div style={styles.row1Container}>
            <CircularProgress
               color='secondary'
               size={30}
               thickness={3.6}
            />
         </div>}
      </div>
   ); //end return.

} //end function.
} //end module.