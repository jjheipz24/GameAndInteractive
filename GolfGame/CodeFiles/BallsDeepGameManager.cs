using UnityEngine;
using System.Collections;
using UnityEngine.SceneManagement;
public class BallsDeepGameManager : MonoBehaviour {

	public static BallsDeepGameManager code;
	public string sceneName;
	int score = 0;
	int obstacleHit = 50;
	bool canReset = false;
	bool levelReset = false;
	private AudioSource background;


	void Awake(){
		background = GetComponent <AudioSource> ();
		DontDestroyOnLoad (this);
	}
	// Use this for initialization
	void Start () {
		code = this;
		background.Play ();
	}

	// Update is called once per frame
	void Update () {
		CheckLevelReset ();
		CheckReset ();
		QuitGame ();
	}

	void CheckReset(){ //Reset for the entire game (Back to the start screen)
		if(Input.GetKeyDown (KeyCode.R)){
			canReset = true;
			Score.score = 0;
			SceneManager.LoadScene (sceneName);
			}
		}


	void CheckLevelReset(){
		if (Input.GetKeyDown (KeyCode.E)) {
			levelReset = true;
			SceneManager.LoadScene (SceneManager.GetActiveScene ().name);
			}
		}

	void QuitGame(){
		if (Input.GetKeyDown (KeyCode.Escape)) {
			Application.Quit ();
		}
	}
	}



