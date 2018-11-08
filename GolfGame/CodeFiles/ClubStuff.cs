
﻿using UnityEngine;
using System.Collections;

public class ClubStuff : MonoBehaviour {

	GameObject ball;
	GameObject club;
	private AudioSource clubHit;

	void Awake(){
		clubHit = GetComponent <AudioSource> ();
	}
	// Use this for initialization
	void Start () {
		//rend = GetComponent<Renderer>();

		ball = GameObject.FindGameObjectWithTag ("Ball");
		club = GameObject.FindGameObjectWithTag ("Club");
	}

	// Update is called once per frame
	void Update () {

		float zRot = transform.eulerAngles.z;

		zRot = Mathf.Lerp (zRot, 0, Time.deltaTime * 10.0f);

		if (Input.GetKeyDown (KeyCode.UpArrow)) {
			transform.position = new Vector3 (ball.transform.position.x, ball.transform.position.y + 9.8f, ball.transform.position.z - .8f);
			zRot = 45;
			clubHit.Play ();
		} 

		if (Input.GetKeyDown (KeyCode.DownArrow)) {
			transform.position = new Vector3 (1000000, 100000, 10000);
			//StartCoroutine (Actions ());
		}


		transform.rotation = Quaternion.Euler(0, 0, zRot);

	}

	/*
    IEnumerator Actions(){
        SwingOpen ();
        gameObject.transform.rotation = Quaternion.Euler (0, 0, 0);
//      rend.enabled = true;
 
        Quaternion newRotation = Quaternion.AngleAxis(-50, Vector3.up);
        while (true) {
            transform.rotation = Quaternion.Lerp (transform.rotation, newRotation, 6 * Time.deltaTime);
            yield return null;
        }
        yield return new WaitForSeconds (2.0f);
 
        //rend.enabled = false;
 
    }*/
}