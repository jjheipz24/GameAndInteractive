using UnityEngine;

using System.Collections;

using UnityEngine.SceneManagement;



	public class NextLevel : MonoBehaviour {
	
	// Use this for initialization

	
	public string sceneName;

	

		void Start () {
	
	
	}
	
	

		// Update is called once per frame
	
		void Update () {
	
	

	}
	
		void OnTriggerEnter(Collider collider){
		
			SceneManager.LoadScene (sceneName);
	
	}

}

