using UnityEngine;

using System.Collections;


public class EndSound : MonoBehaviour {
	
private AudioSource yeet;

	

	void Awake(){

		yeet = GetComponent<AudioSource> ();
	
	}

	

	void Start () {
		
		yeet.Play ();
	
	}
	
	


	// Update is called once per frame
	
	void Update () {

	
	}

}
