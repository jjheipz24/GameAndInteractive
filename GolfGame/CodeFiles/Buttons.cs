using UnityEngine;

using System.Collections;
 



public class Buttons : MonoBehaviour {
	
	public string sceneName;

	
	
	public void OnMouseDown(){
Application.LoadLevel (sceneName);
}

}
